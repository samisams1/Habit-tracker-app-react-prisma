/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */





declare global {
  interface NexusGenCustomOutputProperties<TypeName extends string> {
    model: NexusPrisma<TypeName, 'model'>
    crud: any
  }
}

declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
}

export interface NexusGenEnums {
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
}

export interface NexusGenObjects {
  AuthPayload: { // root type
    token: string; // String!
    user: NexusGenRootTypes['User']; // User!
  }
  Habit: { // root type
    id?: string | null; // String
    name?: string | null; // String
    streak?: string | null; // String
  }
  Mutation: {};
  Query: {};
  User: { // root type
    email?: string | null; // String
    id?: string | null; // ID
    name?: string | null; // String
    password?: string | null; // String
  }
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars

export interface NexusGenFieldTypes {
  AuthPayload: { // field return type
    token: string; // String!
    user: NexusGenRootTypes['User']; // User!
  }
  Habit: { // field return type
    id: string | null; // String
    name: string | null; // String
    streak: string | null; // String
  }
  Mutation: { // field return type
    createHabit: NexusGenRootTypes['Habit'] | null; // Habit
    deleteHabit: NexusGenRootTypes['Habit'] | null; // Habit
    incrementStreak: NexusGenRootTypes['Habit'] | null; // Habit
    login: NexusGenRootTypes['AuthPayload']; // AuthPayload!
    signup: NexusGenRootTypes['AuthPayload']; // AuthPayload!
    updateHabit: NexusGenRootTypes['Habit'] | null; // Habit
  }
  Query: { // field return type
    findHabitByName: Array<NexusGenRootTypes['Habit'] | null> | null; // [Habit]
    habit: Array<NexusGenRootTypes['Habit'] | null> | null; // [Habit]
    habits: Array<NexusGenRootTypes['Habit'] | null> | null; // [Habit]
  }
  User: { // field return type
    email: string | null; // String
    id: string | null; // ID
    name: string | null; // String
    password: string | null; // String
  }
}

export interface NexusGenFieldTypeNames {
  AuthPayload: { // field return type name
    token: 'String'
    user: 'User'
  }
  Habit: { // field return type name
    id: 'String'
    name: 'String'
    streak: 'String'
  }
  Mutation: { // field return type name
    createHabit: 'Habit'
    deleteHabit: 'Habit'
    incrementStreak: 'Habit'
    login: 'AuthPayload'
    signup: 'AuthPayload'
    updateHabit: 'Habit'
  }
  Query: { // field return type name
    findHabitByName: 'Habit'
    habit: 'Habit'
    habits: 'Habit'
  }
  User: { // field return type name
    email: 'String'
    id: 'ID'
    name: 'String'
    password: 'String'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    createHabit: { // args
      name?: string | null; // String
      streak?: number | null; // Int
    }
    deleteHabit: { // args
      id?: string | null; // String
    }
    incrementStreak: { // args
      name?: string | null; // String
    }
    login: { // args
      email: string; // String!
      password: string; // String!
    }
    signup: { // args
      email: string; // String!
      name: string; // String!
      password: string; // String!
    }
    updateHabit: { // args
      id?: string | null; // String
      name?: string | null; // String
      streak?: number | null; // Int
    }
  }
  Query: {
    findHabitByName: { // args
      name?: string | null; // String
    }
    habit: { // args
      id?: string | null; // ID
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = never;

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: any;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}