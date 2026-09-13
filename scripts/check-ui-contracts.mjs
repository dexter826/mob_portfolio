import { readdirSync, readFileSync } from 'node:fs';
import { extname, join, relative } from 'node:path';

const sourceRoots = ['app', 'components'];
const sourceExtensions = new Set(['.css', '.js', '.jsx', '.ts', '.tsx']);
const rules = [
  {
    name: 'raw color',
    pattern: /#[\da-f]{3,8}\b|(?:rgb|rgba|hsl|hsla|oklab|oklch|lab|lch)\s*\(/gi,
    guidance: 'Use a semantic --ds-* token instead.',
  },
  {
    name: 'local effect implementation',
    pattern: /\bwhile(?:Hover|Tap)\b|type\s*:\s*['"]spring['"]|@keyframes\b|animate-scanline|glitch-layer/g,
    guidance: 'Use an exported M.O.B Signal recipe or the shared motion contract instead.',
  },
  {
    name: 'legacy local primitive import',
    pattern: /@\/components\/ui\/(?:button|badge|card|separator)\b/gi,
    guidance: 'Import the primitive from @mob-signal/components.',
  },
];

function collectFiles(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) return collectFiles(path);
    return sourceExtensions.has(extname(entry.name)) ? [path] : [];
  });
}

const violations = [];

for (const file of sourceRoots.flatMap(collectFiles)) {
  const source = readFileSync(file, 'utf8');

  for (const rule of rules) {
    rule.pattern.lastIndex = 0;
    for (const match of source.matchAll(rule.pattern)) {
      const line = source.slice(0, match.index).split('\n').length;
      violations.push(`${relative(process.cwd(), file)}:${line} ${rule.name} "${match[0]}". ${rule.guidance}`);
    }
  }
}

if (violations.length > 0) {
  console.error(`UI contract check failed with ${violations.length} violation(s):`);
  for (const violation of violations) console.error(`- ${violation}`);
  process.exit(1);
}

console.log('UI contract check passed: semantic colors, shared effects, and design-system primitives are enforced.');
