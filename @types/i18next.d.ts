import * as resources from '../src/translations/resources';
import { defaultNS } from '../src/translations';

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: typeof defaultNS;
    resources: (typeof resources)['en'];
  }
}

type Join<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}${'' extends P ? '' : '.'}${P}`
    : never
  : never;

type Leaves<T> = T extends object
  ? { [K in keyof T]-?: Join<K, Leaves<T[K]>> }[keyof T]
  : '';

export type TranslationKeys = Leaves<(typeof resources)['vi']>;
