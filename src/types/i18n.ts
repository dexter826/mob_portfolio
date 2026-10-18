export type Language = 'vi' | 'en';

export type I18nRecord<T = string> = {
  vi: T;
  en: T;
};

export type MultiLangText = string | I18nRecord<string>;
