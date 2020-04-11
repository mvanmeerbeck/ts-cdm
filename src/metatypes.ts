/**
 * This file is auto-generated from the ISDA Common Domain Model, do not edit.
 * Version: 2.40.2
 */
export interface FieldWithMeta<T> {
  value: T;
  meta?: MetaFields;
}

export interface ReferenceWithMeta<T> {
  globalReference: String;
  externalReference: String;
  value: T;
}
    
export interface MetaFields {
  reference?: string;
  scheme?: string;
  id?: string;
  globalKey?: String;
  externalKey?: String;
}

