
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Tokens
 * 
 */
export type Tokens = $Result.DefaultSelection<Prisma.$TokensPayload>
/**
 * Model Organization
 * 
 */
export type Organization = $Result.DefaultSelection<Prisma.$OrganizationPayload>
/**
 * Model Organization_Users
 * 
 */
export type Organization_Users = $Result.DefaultSelection<Prisma.$Organization_UsersPayload>
/**
 * Model Warehouses
 * 
 */
export type Warehouses = $Result.DefaultSelection<Prisma.$WarehousesPayload>
/**
 * Model Products
 * 
 */
export type Products = $Result.DefaultSelection<Prisma.$ProductsPayload>
/**
 * Model Nomenclature_Category
 * 
 */
export type Nomenclature_Category = $Result.DefaultSelection<Prisma.$Nomenclature_CategoryPayload>
/**
 * Model Nomenklatury
 * 
 */
export type Nomenklatury = $Result.DefaultSelection<Prisma.$NomenklaturyPayload>
/**
 * Model Nomenklatury_Products
 * 
 */
export type Nomenklatury_Products = $Result.DefaultSelection<Prisma.$Nomenklatury_ProductsPayload>
/**
 * Model Documents
 * 
 */
export type Documents = $Result.DefaultSelection<Prisma.$DocumentsPayload>
/**
 * Model Documents_Products
 * 
 */
export type Documents_Products = $Result.DefaultSelection<Prisma.$Documents_ProductsPayload>
/**
 * Model Devices
 * 
 */
export type Devices = $Result.DefaultSelection<Prisma.$DevicesPayload>
/**
 * Model Scan_events
 * 
 */
export type Scan_events = $Result.DefaultSelection<Prisma.$Scan_eventsPayload>
/**
 * Model Sync_logs
 * 
 */
export type Sync_logs = $Result.DefaultSelection<Prisma.$Sync_logsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  ADMIN: 'ADMIN',
  REGULAR: 'REGULAR'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const TokenType: {
  VERIFICATION: 'VERIFICATION',
  PASSWORD_RESET: 'PASSWORD_RESET',
  TWO_FACTOR: 'TWO_FACTOR'
};

export type TokenType = (typeof TokenType)[keyof typeof TokenType]


export const OrganizationRole: {
  ADMIN: 'ADMIN',
  WAREHOUSE_WORKER: 'WAREHOUSE_WORKER'
};

export type OrganizationRole = (typeof OrganizationRole)[keyof typeof OrganizationRole]


export const WarehouseStatus: {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE'
};

export type WarehouseStatus = (typeof WarehouseStatus)[keyof typeof WarehouseStatus]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type TokenType = $Enums.TokenType

export const TokenType: typeof $Enums.TokenType

export type OrganizationRole = $Enums.OrganizationRole

export const OrganizationRole: typeof $Enums.OrganizationRole

export type WarehouseStatus = $Enums.WarehouseStatus

export const WarehouseStatus: typeof $Enums.WarehouseStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tokens`: Exposes CRUD operations for the **Tokens** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tokens
    * const tokens = await prisma.tokens.findMany()
    * ```
    */
  get tokens(): Prisma.TokensDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.organization`: Exposes CRUD operations for the **Organization** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Organizations
    * const organizations = await prisma.organization.findMany()
    * ```
    */
  get organization(): Prisma.OrganizationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.organization_Users`: Exposes CRUD operations for the **Organization_Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Organization_Users
    * const organization_Users = await prisma.organization_Users.findMany()
    * ```
    */
  get organization_Users(): Prisma.Organization_UsersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.warehouses`: Exposes CRUD operations for the **Warehouses** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Warehouses
    * const warehouses = await prisma.warehouses.findMany()
    * ```
    */
  get warehouses(): Prisma.WarehousesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.products`: Exposes CRUD operations for the **Products** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.products.findMany()
    * ```
    */
  get products(): Prisma.ProductsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.nomenclature_Category`: Exposes CRUD operations for the **Nomenclature_Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Nomenclature_Categories
    * const nomenclature_Categories = await prisma.nomenclature_Category.findMany()
    * ```
    */
  get nomenclature_Category(): Prisma.Nomenclature_CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.nomenklatury`: Exposes CRUD operations for the **Nomenklatury** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Nomenklaturies
    * const nomenklaturies = await prisma.nomenklatury.findMany()
    * ```
    */
  get nomenklatury(): Prisma.NomenklaturyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.nomenklatury_Products`: Exposes CRUD operations for the **Nomenklatury_Products** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Nomenklatury_Products
    * const nomenklatury_Products = await prisma.nomenklatury_Products.findMany()
    * ```
    */
  get nomenklatury_Products(): Prisma.Nomenklatury_ProductsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.documents`: Exposes CRUD operations for the **Documents** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Documents
    * const documents = await prisma.documents.findMany()
    * ```
    */
  get documents(): Prisma.DocumentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.documents_Products`: Exposes CRUD operations for the **Documents_Products** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Documents_Products
    * const documents_Products = await prisma.documents_Products.findMany()
    * ```
    */
  get documents_Products(): Prisma.Documents_ProductsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.devices`: Exposes CRUD operations for the **Devices** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Devices
    * const devices = await prisma.devices.findMany()
    * ```
    */
  get devices(): Prisma.DevicesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.scan_events`: Exposes CRUD operations for the **Scan_events** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Scan_events
    * const scan_events = await prisma.scan_events.findMany()
    * ```
    */
  get scan_events(): Prisma.Scan_eventsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sync_logs`: Exposes CRUD operations for the **Sync_logs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sync_logs
    * const sync_logs = await prisma.sync_logs.findMany()
    * ```
    */
  get sync_logs(): Prisma.Sync_logsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.0
   * Query Engine version: 2ba551f319ab1df4bc874a89965d8b3641056773
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Tokens: 'Tokens',
    Organization: 'Organization',
    Organization_Users: 'Organization_Users',
    Warehouses: 'Warehouses',
    Products: 'Products',
    Nomenclature_Category: 'Nomenclature_Category',
    Nomenklatury: 'Nomenklatury',
    Nomenklatury_Products: 'Nomenklatury_Products',
    Documents: 'Documents',
    Documents_Products: 'Documents_Products',
    Devices: 'Devices',
    Scan_events: 'Scan_events',
    Sync_logs: 'Sync_logs'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "tokens" | "organization" | "organization_Users" | "warehouses" | "products" | "nomenclature_Category" | "nomenklatury" | "nomenklatury_Products" | "documents" | "documents_Products" | "devices" | "scan_events" | "sync_logs"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Tokens: {
        payload: Prisma.$TokensPayload<ExtArgs>
        fields: Prisma.TokensFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TokensFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokensPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TokensFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokensPayload>
          }
          findFirst: {
            args: Prisma.TokensFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokensPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TokensFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokensPayload>
          }
          findMany: {
            args: Prisma.TokensFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokensPayload>[]
          }
          create: {
            args: Prisma.TokensCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokensPayload>
          }
          createMany: {
            args: Prisma.TokensCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TokensCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokensPayload>[]
          }
          delete: {
            args: Prisma.TokensDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokensPayload>
          }
          update: {
            args: Prisma.TokensUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokensPayload>
          }
          deleteMany: {
            args: Prisma.TokensDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TokensUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TokensUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokensPayload>[]
          }
          upsert: {
            args: Prisma.TokensUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokensPayload>
          }
          aggregate: {
            args: Prisma.TokensAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTokens>
          }
          groupBy: {
            args: Prisma.TokensGroupByArgs<ExtArgs>
            result: $Utils.Optional<TokensGroupByOutputType>[]
          }
          count: {
            args: Prisma.TokensCountArgs<ExtArgs>
            result: $Utils.Optional<TokensCountAggregateOutputType> | number
          }
        }
      }
      Organization: {
        payload: Prisma.$OrganizationPayload<ExtArgs>
        fields: Prisma.OrganizationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrganizationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrganizationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          findFirst: {
            args: Prisma.OrganizationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrganizationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          findMany: {
            args: Prisma.OrganizationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[]
          }
          create: {
            args: Prisma.OrganizationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          createMany: {
            args: Prisma.OrganizationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrganizationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[]
          }
          delete: {
            args: Prisma.OrganizationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          update: {
            args: Prisma.OrganizationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          deleteMany: {
            args: Prisma.OrganizationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrganizationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrganizationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[]
          }
          upsert: {
            args: Prisma.OrganizationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          aggregate: {
            args: Prisma.OrganizationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrganization>
          }
          groupBy: {
            args: Prisma.OrganizationGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrganizationGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrganizationCountArgs<ExtArgs>
            result: $Utils.Optional<OrganizationCountAggregateOutputType> | number
          }
        }
      }
      Organization_Users: {
        payload: Prisma.$Organization_UsersPayload<ExtArgs>
        fields: Prisma.Organization_UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Organization_UsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Organization_UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Organization_UsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Organization_UsersPayload>
          }
          findFirst: {
            args: Prisma.Organization_UsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Organization_UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Organization_UsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Organization_UsersPayload>
          }
          findMany: {
            args: Prisma.Organization_UsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Organization_UsersPayload>[]
          }
          create: {
            args: Prisma.Organization_UsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Organization_UsersPayload>
          }
          createMany: {
            args: Prisma.Organization_UsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Organization_UsersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Organization_UsersPayload>[]
          }
          delete: {
            args: Prisma.Organization_UsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Organization_UsersPayload>
          }
          update: {
            args: Prisma.Organization_UsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Organization_UsersPayload>
          }
          deleteMany: {
            args: Prisma.Organization_UsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Organization_UsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Organization_UsersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Organization_UsersPayload>[]
          }
          upsert: {
            args: Prisma.Organization_UsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Organization_UsersPayload>
          }
          aggregate: {
            args: Prisma.Organization_UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrganization_Users>
          }
          groupBy: {
            args: Prisma.Organization_UsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<Organization_UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.Organization_UsersCountArgs<ExtArgs>
            result: $Utils.Optional<Organization_UsersCountAggregateOutputType> | number
          }
        }
      }
      Warehouses: {
        payload: Prisma.$WarehousesPayload<ExtArgs>
        fields: Prisma.WarehousesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WarehousesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WarehousesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousesPayload>
          }
          findFirst: {
            args: Prisma.WarehousesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WarehousesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousesPayload>
          }
          findMany: {
            args: Prisma.WarehousesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousesPayload>[]
          }
          create: {
            args: Prisma.WarehousesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousesPayload>
          }
          createMany: {
            args: Prisma.WarehousesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WarehousesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousesPayload>[]
          }
          delete: {
            args: Prisma.WarehousesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousesPayload>
          }
          update: {
            args: Prisma.WarehousesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousesPayload>
          }
          deleteMany: {
            args: Prisma.WarehousesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WarehousesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WarehousesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousesPayload>[]
          }
          upsert: {
            args: Prisma.WarehousesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousesPayload>
          }
          aggregate: {
            args: Prisma.WarehousesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWarehouses>
          }
          groupBy: {
            args: Prisma.WarehousesGroupByArgs<ExtArgs>
            result: $Utils.Optional<WarehousesGroupByOutputType>[]
          }
          count: {
            args: Prisma.WarehousesCountArgs<ExtArgs>
            result: $Utils.Optional<WarehousesCountAggregateOutputType> | number
          }
        }
      }
      Products: {
        payload: Prisma.$ProductsPayload<ExtArgs>
        fields: Prisma.ProductsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          findFirst: {
            args: Prisma.ProductsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          findMany: {
            args: Prisma.ProductsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>[]
          }
          create: {
            args: Prisma.ProductsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          createMany: {
            args: Prisma.ProductsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>[]
          }
          delete: {
            args: Prisma.ProductsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          update: {
            args: Prisma.ProductsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          deleteMany: {
            args: Prisma.ProductsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>[]
          }
          upsert: {
            args: Prisma.ProductsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          aggregate: {
            args: Prisma.ProductsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProducts>
          }
          groupBy: {
            args: Prisma.ProductsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductsCountArgs<ExtArgs>
            result: $Utils.Optional<ProductsCountAggregateOutputType> | number
          }
        }
      }
      Nomenclature_Category: {
        payload: Prisma.$Nomenclature_CategoryPayload<ExtArgs>
        fields: Prisma.Nomenclature_CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Nomenclature_CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Nomenclature_CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Nomenclature_CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Nomenclature_CategoryPayload>
          }
          findFirst: {
            args: Prisma.Nomenclature_CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Nomenclature_CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Nomenclature_CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Nomenclature_CategoryPayload>
          }
          findMany: {
            args: Prisma.Nomenclature_CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Nomenclature_CategoryPayload>[]
          }
          create: {
            args: Prisma.Nomenclature_CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Nomenclature_CategoryPayload>
          }
          createMany: {
            args: Prisma.Nomenclature_CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Nomenclature_CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Nomenclature_CategoryPayload>[]
          }
          delete: {
            args: Prisma.Nomenclature_CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Nomenclature_CategoryPayload>
          }
          update: {
            args: Prisma.Nomenclature_CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Nomenclature_CategoryPayload>
          }
          deleteMany: {
            args: Prisma.Nomenclature_CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Nomenclature_CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Nomenclature_CategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Nomenclature_CategoryPayload>[]
          }
          upsert: {
            args: Prisma.Nomenclature_CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Nomenclature_CategoryPayload>
          }
          aggregate: {
            args: Prisma.Nomenclature_CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNomenclature_Category>
          }
          groupBy: {
            args: Prisma.Nomenclature_CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<Nomenclature_CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.Nomenclature_CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<Nomenclature_CategoryCountAggregateOutputType> | number
          }
        }
      }
      Nomenklatury: {
        payload: Prisma.$NomenklaturyPayload<ExtArgs>
        fields: Prisma.NomenklaturyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NomenklaturyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NomenklaturyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NomenklaturyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NomenklaturyPayload>
          }
          findFirst: {
            args: Prisma.NomenklaturyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NomenklaturyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NomenklaturyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NomenklaturyPayload>
          }
          findMany: {
            args: Prisma.NomenklaturyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NomenklaturyPayload>[]
          }
          create: {
            args: Prisma.NomenklaturyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NomenklaturyPayload>
          }
          createMany: {
            args: Prisma.NomenklaturyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NomenklaturyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NomenklaturyPayload>[]
          }
          delete: {
            args: Prisma.NomenklaturyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NomenklaturyPayload>
          }
          update: {
            args: Prisma.NomenklaturyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NomenklaturyPayload>
          }
          deleteMany: {
            args: Prisma.NomenklaturyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NomenklaturyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NomenklaturyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NomenklaturyPayload>[]
          }
          upsert: {
            args: Prisma.NomenklaturyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NomenklaturyPayload>
          }
          aggregate: {
            args: Prisma.NomenklaturyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNomenklatury>
          }
          groupBy: {
            args: Prisma.NomenklaturyGroupByArgs<ExtArgs>
            result: $Utils.Optional<NomenklaturyGroupByOutputType>[]
          }
          count: {
            args: Prisma.NomenklaturyCountArgs<ExtArgs>
            result: $Utils.Optional<NomenklaturyCountAggregateOutputType> | number
          }
        }
      }
      Nomenklatury_Products: {
        payload: Prisma.$Nomenklatury_ProductsPayload<ExtArgs>
        fields: Prisma.Nomenklatury_ProductsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Nomenklatury_ProductsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Nomenklatury_ProductsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Nomenklatury_ProductsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Nomenklatury_ProductsPayload>
          }
          findFirst: {
            args: Prisma.Nomenklatury_ProductsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Nomenklatury_ProductsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Nomenklatury_ProductsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Nomenklatury_ProductsPayload>
          }
          findMany: {
            args: Prisma.Nomenklatury_ProductsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Nomenklatury_ProductsPayload>[]
          }
          create: {
            args: Prisma.Nomenklatury_ProductsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Nomenklatury_ProductsPayload>
          }
          createMany: {
            args: Prisma.Nomenklatury_ProductsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Nomenklatury_ProductsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Nomenklatury_ProductsPayload>[]
          }
          delete: {
            args: Prisma.Nomenklatury_ProductsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Nomenklatury_ProductsPayload>
          }
          update: {
            args: Prisma.Nomenklatury_ProductsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Nomenklatury_ProductsPayload>
          }
          deleteMany: {
            args: Prisma.Nomenklatury_ProductsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Nomenklatury_ProductsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Nomenklatury_ProductsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Nomenklatury_ProductsPayload>[]
          }
          upsert: {
            args: Prisma.Nomenklatury_ProductsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Nomenklatury_ProductsPayload>
          }
          aggregate: {
            args: Prisma.Nomenklatury_ProductsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNomenklatury_Products>
          }
          groupBy: {
            args: Prisma.Nomenklatury_ProductsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Nomenklatury_ProductsGroupByOutputType>[]
          }
          count: {
            args: Prisma.Nomenklatury_ProductsCountArgs<ExtArgs>
            result: $Utils.Optional<Nomenklatury_ProductsCountAggregateOutputType> | number
          }
        }
      }
      Documents: {
        payload: Prisma.$DocumentsPayload<ExtArgs>
        fields: Prisma.DocumentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DocumentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DocumentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentsPayload>
          }
          findFirst: {
            args: Prisma.DocumentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DocumentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentsPayload>
          }
          findMany: {
            args: Prisma.DocumentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentsPayload>[]
          }
          create: {
            args: Prisma.DocumentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentsPayload>
          }
          createMany: {
            args: Prisma.DocumentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DocumentsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentsPayload>[]
          }
          delete: {
            args: Prisma.DocumentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentsPayload>
          }
          update: {
            args: Prisma.DocumentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentsPayload>
          }
          deleteMany: {
            args: Prisma.DocumentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DocumentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DocumentsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentsPayload>[]
          }
          upsert: {
            args: Prisma.DocumentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentsPayload>
          }
          aggregate: {
            args: Prisma.DocumentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDocuments>
          }
          groupBy: {
            args: Prisma.DocumentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<DocumentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.DocumentsCountArgs<ExtArgs>
            result: $Utils.Optional<DocumentsCountAggregateOutputType> | number
          }
        }
      }
      Documents_Products: {
        payload: Prisma.$Documents_ProductsPayload<ExtArgs>
        fields: Prisma.Documents_ProductsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Documents_ProductsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Documents_ProductsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Documents_ProductsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Documents_ProductsPayload>
          }
          findFirst: {
            args: Prisma.Documents_ProductsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Documents_ProductsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Documents_ProductsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Documents_ProductsPayload>
          }
          findMany: {
            args: Prisma.Documents_ProductsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Documents_ProductsPayload>[]
          }
          create: {
            args: Prisma.Documents_ProductsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Documents_ProductsPayload>
          }
          createMany: {
            args: Prisma.Documents_ProductsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Documents_ProductsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Documents_ProductsPayload>[]
          }
          delete: {
            args: Prisma.Documents_ProductsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Documents_ProductsPayload>
          }
          update: {
            args: Prisma.Documents_ProductsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Documents_ProductsPayload>
          }
          deleteMany: {
            args: Prisma.Documents_ProductsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Documents_ProductsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Documents_ProductsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Documents_ProductsPayload>[]
          }
          upsert: {
            args: Prisma.Documents_ProductsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Documents_ProductsPayload>
          }
          aggregate: {
            args: Prisma.Documents_ProductsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDocuments_Products>
          }
          groupBy: {
            args: Prisma.Documents_ProductsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Documents_ProductsGroupByOutputType>[]
          }
          count: {
            args: Prisma.Documents_ProductsCountArgs<ExtArgs>
            result: $Utils.Optional<Documents_ProductsCountAggregateOutputType> | number
          }
        }
      }
      Devices: {
        payload: Prisma.$DevicesPayload<ExtArgs>
        fields: Prisma.DevicesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DevicesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DevicesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicesPayload>
          }
          findFirst: {
            args: Prisma.DevicesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DevicesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicesPayload>
          }
          findMany: {
            args: Prisma.DevicesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicesPayload>[]
          }
          create: {
            args: Prisma.DevicesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicesPayload>
          }
          createMany: {
            args: Prisma.DevicesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DevicesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicesPayload>[]
          }
          delete: {
            args: Prisma.DevicesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicesPayload>
          }
          update: {
            args: Prisma.DevicesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicesPayload>
          }
          deleteMany: {
            args: Prisma.DevicesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DevicesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DevicesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicesPayload>[]
          }
          upsert: {
            args: Prisma.DevicesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicesPayload>
          }
          aggregate: {
            args: Prisma.DevicesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDevices>
          }
          groupBy: {
            args: Prisma.DevicesGroupByArgs<ExtArgs>
            result: $Utils.Optional<DevicesGroupByOutputType>[]
          }
          count: {
            args: Prisma.DevicesCountArgs<ExtArgs>
            result: $Utils.Optional<DevicesCountAggregateOutputType> | number
          }
        }
      }
      Scan_events: {
        payload: Prisma.$Scan_eventsPayload<ExtArgs>
        fields: Prisma.Scan_eventsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Scan_eventsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Scan_eventsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Scan_eventsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Scan_eventsPayload>
          }
          findFirst: {
            args: Prisma.Scan_eventsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Scan_eventsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Scan_eventsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Scan_eventsPayload>
          }
          findMany: {
            args: Prisma.Scan_eventsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Scan_eventsPayload>[]
          }
          create: {
            args: Prisma.Scan_eventsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Scan_eventsPayload>
          }
          createMany: {
            args: Prisma.Scan_eventsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Scan_eventsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Scan_eventsPayload>[]
          }
          delete: {
            args: Prisma.Scan_eventsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Scan_eventsPayload>
          }
          update: {
            args: Prisma.Scan_eventsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Scan_eventsPayload>
          }
          deleteMany: {
            args: Prisma.Scan_eventsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Scan_eventsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Scan_eventsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Scan_eventsPayload>[]
          }
          upsert: {
            args: Prisma.Scan_eventsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Scan_eventsPayload>
          }
          aggregate: {
            args: Prisma.Scan_eventsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateScan_events>
          }
          groupBy: {
            args: Prisma.Scan_eventsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Scan_eventsGroupByOutputType>[]
          }
          count: {
            args: Prisma.Scan_eventsCountArgs<ExtArgs>
            result: $Utils.Optional<Scan_eventsCountAggregateOutputType> | number
          }
        }
      }
      Sync_logs: {
        payload: Prisma.$Sync_logsPayload<ExtArgs>
        fields: Prisma.Sync_logsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Sync_logsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Sync_logsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Sync_logsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Sync_logsPayload>
          }
          findFirst: {
            args: Prisma.Sync_logsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Sync_logsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Sync_logsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Sync_logsPayload>
          }
          findMany: {
            args: Prisma.Sync_logsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Sync_logsPayload>[]
          }
          create: {
            args: Prisma.Sync_logsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Sync_logsPayload>
          }
          createMany: {
            args: Prisma.Sync_logsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Sync_logsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Sync_logsPayload>[]
          }
          delete: {
            args: Prisma.Sync_logsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Sync_logsPayload>
          }
          update: {
            args: Prisma.Sync_logsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Sync_logsPayload>
          }
          deleteMany: {
            args: Prisma.Sync_logsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Sync_logsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Sync_logsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Sync_logsPayload>[]
          }
          upsert: {
            args: Prisma.Sync_logsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Sync_logsPayload>
          }
          aggregate: {
            args: Prisma.Sync_logsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSync_logs>
          }
          groupBy: {
            args: Prisma.Sync_logsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Sync_logsGroupByOutputType>[]
          }
          count: {
            args: Prisma.Sync_logsCountArgs<ExtArgs>
            result: $Utils.Optional<Sync_logsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    tokens?: TokensOmit
    organization?: OrganizationOmit
    organization_Users?: Organization_UsersOmit
    warehouses?: WarehousesOmit
    products?: ProductsOmit
    nomenclature_Category?: Nomenclature_CategoryOmit
    nomenklatury?: NomenklaturyOmit
    nomenklatury_Products?: Nomenklatury_ProductsOmit
    documents?: DocumentsOmit
    documents_Products?: Documents_ProductsOmit
    devices?: DevicesOmit
    scan_events?: Scan_eventsOmit
    sync_logs?: Sync_logsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    userId: string | null
    email: string | null
    passwordHash: string | null
    isVerified: boolean | null
    isTwoFactorEnabled: boolean | null
    firstName: string | null
    middleName: string | null
    lastName: string | null
    createdAt: Date | null
    updatedAt: Date | null
    lastLogin: Date | null
    role: $Enums.UserRole | null
  }

  export type UserMaxAggregateOutputType = {
    userId: string | null
    email: string | null
    passwordHash: string | null
    isVerified: boolean | null
    isTwoFactorEnabled: boolean | null
    firstName: string | null
    middleName: string | null
    lastName: string | null
    createdAt: Date | null
    updatedAt: Date | null
    lastLogin: Date | null
    role: $Enums.UserRole | null
  }

  export type UserCountAggregateOutputType = {
    userId: number
    email: number
    passwordHash: number
    isVerified: number
    isTwoFactorEnabled: number
    firstName: number
    middleName: number
    lastName: number
    createdAt: number
    updatedAt: number
    lastLogin: number
    role: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    userId?: true
    email?: true
    passwordHash?: true
    isVerified?: true
    isTwoFactorEnabled?: true
    firstName?: true
    middleName?: true
    lastName?: true
    createdAt?: true
    updatedAt?: true
    lastLogin?: true
    role?: true
  }

  export type UserMaxAggregateInputType = {
    userId?: true
    email?: true
    passwordHash?: true
    isVerified?: true
    isTwoFactorEnabled?: true
    firstName?: true
    middleName?: true
    lastName?: true
    createdAt?: true
    updatedAt?: true
    lastLogin?: true
    role?: true
  }

  export type UserCountAggregateInputType = {
    userId?: true
    email?: true
    passwordHash?: true
    isVerified?: true
    isTwoFactorEnabled?: true
    firstName?: true
    middleName?: true
    lastName?: true
    createdAt?: true
    updatedAt?: true
    lastLogin?: true
    role?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    userId: string
    email: string
    passwordHash: string
    isVerified: boolean
    isTwoFactorEnabled: boolean
    firstName: string
    middleName: string
    lastName: string
    createdAt: Date
    updatedAt: Date
    lastLogin: Date
    role: $Enums.UserRole
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    email?: boolean
    passwordHash?: boolean
    isVerified?: boolean
    isTwoFactorEnabled?: boolean
    firstName?: boolean
    middleName?: boolean
    lastName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastLogin?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    email?: boolean
    passwordHash?: boolean
    isVerified?: boolean
    isTwoFactorEnabled?: boolean
    firstName?: boolean
    middleName?: boolean
    lastName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastLogin?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    email?: boolean
    passwordHash?: boolean
    isVerified?: boolean
    isTwoFactorEnabled?: boolean
    firstName?: boolean
    middleName?: boolean
    lastName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastLogin?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    userId?: boolean
    email?: boolean
    passwordHash?: boolean
    isVerified?: boolean
    isTwoFactorEnabled?: boolean
    firstName?: boolean
    middleName?: boolean
    lastName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastLogin?: boolean
    role?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "email" | "passwordHash" | "isVerified" | "isTwoFactorEnabled" | "firstName" | "middleName" | "lastName" | "createdAt" | "updatedAt" | "lastLogin" | "role", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      email: string
      passwordHash: string
      isVerified: boolean
      isTwoFactorEnabled: boolean
      firstName: string
      middleName: string
      lastName: string
      createdAt: Date
      updatedAt: Date
      lastLogin: Date
      role: $Enums.UserRole
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const userWithUserIdOnly = await prisma.user.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `userId`
     * const userWithUserIdOnly = await prisma.user.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `userId`
     * const userWithUserIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { userId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly userId: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly isVerified: FieldRef<"User", 'Boolean'>
    readonly isTwoFactorEnabled: FieldRef<"User", 'Boolean'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly middleName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly lastLogin: FieldRef<"User", 'DateTime'>
    readonly role: FieldRef<"User", 'UserRole'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
  }


  /**
   * Model Tokens
   */

  export type AggregateTokens = {
    _count: TokensCountAggregateOutputType | null
    _min: TokensMinAggregateOutputType | null
    _max: TokensMaxAggregateOutputType | null
  }

  export type TokensMinAggregateOutputType = {
    id: string | null
    email: string | null
    token: string | null
    type: $Enums.TokenType | null
    expiresIn: Date | null
  }

  export type TokensMaxAggregateOutputType = {
    id: string | null
    email: string | null
    token: string | null
    type: $Enums.TokenType | null
    expiresIn: Date | null
  }

  export type TokensCountAggregateOutputType = {
    id: number
    email: number
    token: number
    type: number
    expiresIn: number
    _all: number
  }


  export type TokensMinAggregateInputType = {
    id?: true
    email?: true
    token?: true
    type?: true
    expiresIn?: true
  }

  export type TokensMaxAggregateInputType = {
    id?: true
    email?: true
    token?: true
    type?: true
    expiresIn?: true
  }

  export type TokensCountAggregateInputType = {
    id?: true
    email?: true
    token?: true
    type?: true
    expiresIn?: true
    _all?: true
  }

  export type TokensAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tokens to aggregate.
     */
    where?: TokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokensOrderByWithRelationInput | TokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tokens
    **/
    _count?: true | TokensCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TokensMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TokensMaxAggregateInputType
  }

  export type GetTokensAggregateType<T extends TokensAggregateArgs> = {
        [P in keyof T & keyof AggregateTokens]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTokens[P]>
      : GetScalarType<T[P], AggregateTokens[P]>
  }




  export type TokensGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TokensWhereInput
    orderBy?: TokensOrderByWithAggregationInput | TokensOrderByWithAggregationInput[]
    by: TokensScalarFieldEnum[] | TokensScalarFieldEnum
    having?: TokensScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TokensCountAggregateInputType | true
    _min?: TokensMinAggregateInputType
    _max?: TokensMaxAggregateInputType
  }

  export type TokensGroupByOutputType = {
    id: string
    email: string
    token: string
    type: $Enums.TokenType
    expiresIn: Date
    _count: TokensCountAggregateOutputType | null
    _min: TokensMinAggregateOutputType | null
    _max: TokensMaxAggregateOutputType | null
  }

  type GetTokensGroupByPayload<T extends TokensGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TokensGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TokensGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TokensGroupByOutputType[P]>
            : GetScalarType<T[P], TokensGroupByOutputType[P]>
        }
      >
    >


  export type TokensSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    token?: boolean
    type?: boolean
    expiresIn?: boolean
  }, ExtArgs["result"]["tokens"]>

  export type TokensSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    token?: boolean
    type?: boolean
    expiresIn?: boolean
  }, ExtArgs["result"]["tokens"]>

  export type TokensSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    token?: boolean
    type?: boolean
    expiresIn?: boolean
  }, ExtArgs["result"]["tokens"]>

  export type TokensSelectScalar = {
    id?: boolean
    email?: boolean
    token?: boolean
    type?: boolean
    expiresIn?: boolean
  }

  export type TokensOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "token" | "type" | "expiresIn", ExtArgs["result"]["tokens"]>

  export type $TokensPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tokens"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      token: string
      type: $Enums.TokenType
      expiresIn: Date
    }, ExtArgs["result"]["tokens"]>
    composites: {}
  }

  type TokensGetPayload<S extends boolean | null | undefined | TokensDefaultArgs> = $Result.GetResult<Prisma.$TokensPayload, S>

  type TokensCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TokensFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TokensCountAggregateInputType | true
    }

  export interface TokensDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tokens'], meta: { name: 'Tokens' } }
    /**
     * Find zero or one Tokens that matches the filter.
     * @param {TokensFindUniqueArgs} args - Arguments to find a Tokens
     * @example
     * // Get one Tokens
     * const tokens = await prisma.tokens.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TokensFindUniqueArgs>(args: SelectSubset<T, TokensFindUniqueArgs<ExtArgs>>): Prisma__TokensClient<$Result.GetResult<Prisma.$TokensPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tokens that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TokensFindUniqueOrThrowArgs} args - Arguments to find a Tokens
     * @example
     * // Get one Tokens
     * const tokens = await prisma.tokens.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TokensFindUniqueOrThrowArgs>(args: SelectSubset<T, TokensFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TokensClient<$Result.GetResult<Prisma.$TokensPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokensFindFirstArgs} args - Arguments to find a Tokens
     * @example
     * // Get one Tokens
     * const tokens = await prisma.tokens.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TokensFindFirstArgs>(args?: SelectSubset<T, TokensFindFirstArgs<ExtArgs>>): Prisma__TokensClient<$Result.GetResult<Prisma.$TokensPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tokens that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokensFindFirstOrThrowArgs} args - Arguments to find a Tokens
     * @example
     * // Get one Tokens
     * const tokens = await prisma.tokens.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TokensFindFirstOrThrowArgs>(args?: SelectSubset<T, TokensFindFirstOrThrowArgs<ExtArgs>>): Prisma__TokensClient<$Result.GetResult<Prisma.$TokensPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokensFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tokens
     * const tokens = await prisma.tokens.findMany()
     * 
     * // Get first 10 Tokens
     * const tokens = await prisma.tokens.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tokensWithIdOnly = await prisma.tokens.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TokensFindManyArgs>(args?: SelectSubset<T, TokensFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokensPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tokens.
     * @param {TokensCreateArgs} args - Arguments to create a Tokens.
     * @example
     * // Create one Tokens
     * const Tokens = await prisma.tokens.create({
     *   data: {
     *     // ... data to create a Tokens
     *   }
     * })
     * 
     */
    create<T extends TokensCreateArgs>(args: SelectSubset<T, TokensCreateArgs<ExtArgs>>): Prisma__TokensClient<$Result.GetResult<Prisma.$TokensPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tokens.
     * @param {TokensCreateManyArgs} args - Arguments to create many Tokens.
     * @example
     * // Create many Tokens
     * const tokens = await prisma.tokens.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TokensCreateManyArgs>(args?: SelectSubset<T, TokensCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tokens and returns the data saved in the database.
     * @param {TokensCreateManyAndReturnArgs} args - Arguments to create many Tokens.
     * @example
     * // Create many Tokens
     * const tokens = await prisma.tokens.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tokens and only return the `id`
     * const tokensWithIdOnly = await prisma.tokens.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TokensCreateManyAndReturnArgs>(args?: SelectSubset<T, TokensCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokensPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tokens.
     * @param {TokensDeleteArgs} args - Arguments to delete one Tokens.
     * @example
     * // Delete one Tokens
     * const Tokens = await prisma.tokens.delete({
     *   where: {
     *     // ... filter to delete one Tokens
     *   }
     * })
     * 
     */
    delete<T extends TokensDeleteArgs>(args: SelectSubset<T, TokensDeleteArgs<ExtArgs>>): Prisma__TokensClient<$Result.GetResult<Prisma.$TokensPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tokens.
     * @param {TokensUpdateArgs} args - Arguments to update one Tokens.
     * @example
     * // Update one Tokens
     * const tokens = await prisma.tokens.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TokensUpdateArgs>(args: SelectSubset<T, TokensUpdateArgs<ExtArgs>>): Prisma__TokensClient<$Result.GetResult<Prisma.$TokensPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tokens.
     * @param {TokensDeleteManyArgs} args - Arguments to filter Tokens to delete.
     * @example
     * // Delete a few Tokens
     * const { count } = await prisma.tokens.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TokensDeleteManyArgs>(args?: SelectSubset<T, TokensDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokensUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tokens
     * const tokens = await prisma.tokens.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TokensUpdateManyArgs>(args: SelectSubset<T, TokensUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tokens and returns the data updated in the database.
     * @param {TokensUpdateManyAndReturnArgs} args - Arguments to update many Tokens.
     * @example
     * // Update many Tokens
     * const tokens = await prisma.tokens.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tokens and only return the `id`
     * const tokensWithIdOnly = await prisma.tokens.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TokensUpdateManyAndReturnArgs>(args: SelectSubset<T, TokensUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokensPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tokens.
     * @param {TokensUpsertArgs} args - Arguments to update or create a Tokens.
     * @example
     * // Update or create a Tokens
     * const tokens = await prisma.tokens.upsert({
     *   create: {
     *     // ... data to create a Tokens
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tokens we want to update
     *   }
     * })
     */
    upsert<T extends TokensUpsertArgs>(args: SelectSubset<T, TokensUpsertArgs<ExtArgs>>): Prisma__TokensClient<$Result.GetResult<Prisma.$TokensPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokensCountArgs} args - Arguments to filter Tokens to count.
     * @example
     * // Count the number of Tokens
     * const count = await prisma.tokens.count({
     *   where: {
     *     // ... the filter for the Tokens we want to count
     *   }
     * })
    **/
    count<T extends TokensCountArgs>(
      args?: Subset<T, TokensCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TokensCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokensAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TokensAggregateArgs>(args: Subset<T, TokensAggregateArgs>): Prisma.PrismaPromise<GetTokensAggregateType<T>>

    /**
     * Group by Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokensGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TokensGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TokensGroupByArgs['orderBy'] }
        : { orderBy?: TokensGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TokensGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTokensGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tokens model
   */
  readonly fields: TokensFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tokens.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TokensClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tokens model
   */
  interface TokensFieldRefs {
    readonly id: FieldRef<"Tokens", 'String'>
    readonly email: FieldRef<"Tokens", 'String'>
    readonly token: FieldRef<"Tokens", 'String'>
    readonly type: FieldRef<"Tokens", 'TokenType'>
    readonly expiresIn: FieldRef<"Tokens", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Tokens findUnique
   */
  export type TokensFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tokens
     */
    select?: TokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tokens
     */
    omit?: TokensOmit<ExtArgs> | null
    /**
     * Filter, which Tokens to fetch.
     */
    where: TokensWhereUniqueInput
  }

  /**
   * Tokens findUniqueOrThrow
   */
  export type TokensFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tokens
     */
    select?: TokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tokens
     */
    omit?: TokensOmit<ExtArgs> | null
    /**
     * Filter, which Tokens to fetch.
     */
    where: TokensWhereUniqueInput
  }

  /**
   * Tokens findFirst
   */
  export type TokensFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tokens
     */
    select?: TokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tokens
     */
    omit?: TokensOmit<ExtArgs> | null
    /**
     * Filter, which Tokens to fetch.
     */
    where?: TokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokensOrderByWithRelationInput | TokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tokens.
     */
    cursor?: TokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tokens.
     */
    distinct?: TokensScalarFieldEnum | TokensScalarFieldEnum[]
  }

  /**
   * Tokens findFirstOrThrow
   */
  export type TokensFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tokens
     */
    select?: TokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tokens
     */
    omit?: TokensOmit<ExtArgs> | null
    /**
     * Filter, which Tokens to fetch.
     */
    where?: TokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokensOrderByWithRelationInput | TokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tokens.
     */
    cursor?: TokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tokens.
     */
    distinct?: TokensScalarFieldEnum | TokensScalarFieldEnum[]
  }

  /**
   * Tokens findMany
   */
  export type TokensFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tokens
     */
    select?: TokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tokens
     */
    omit?: TokensOmit<ExtArgs> | null
    /**
     * Filter, which Tokens to fetch.
     */
    where?: TokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokensOrderByWithRelationInput | TokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tokens.
     */
    cursor?: TokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    distinct?: TokensScalarFieldEnum | TokensScalarFieldEnum[]
  }

  /**
   * Tokens create
   */
  export type TokensCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tokens
     */
    select?: TokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tokens
     */
    omit?: TokensOmit<ExtArgs> | null
    /**
     * The data needed to create a Tokens.
     */
    data: XOR<TokensCreateInput, TokensUncheckedCreateInput>
  }

  /**
   * Tokens createMany
   */
  export type TokensCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tokens.
     */
    data: TokensCreateManyInput | TokensCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tokens createManyAndReturn
   */
  export type TokensCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tokens
     */
    select?: TokensSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tokens
     */
    omit?: TokensOmit<ExtArgs> | null
    /**
     * The data used to create many Tokens.
     */
    data: TokensCreateManyInput | TokensCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tokens update
   */
  export type TokensUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tokens
     */
    select?: TokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tokens
     */
    omit?: TokensOmit<ExtArgs> | null
    /**
     * The data needed to update a Tokens.
     */
    data: XOR<TokensUpdateInput, TokensUncheckedUpdateInput>
    /**
     * Choose, which Tokens to update.
     */
    where: TokensWhereUniqueInput
  }

  /**
   * Tokens updateMany
   */
  export type TokensUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tokens.
     */
    data: XOR<TokensUpdateManyMutationInput, TokensUncheckedUpdateManyInput>
    /**
     * Filter which Tokens to update
     */
    where?: TokensWhereInput
    /**
     * Limit how many Tokens to update.
     */
    limit?: number
  }

  /**
   * Tokens updateManyAndReturn
   */
  export type TokensUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tokens
     */
    select?: TokensSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tokens
     */
    omit?: TokensOmit<ExtArgs> | null
    /**
     * The data used to update Tokens.
     */
    data: XOR<TokensUpdateManyMutationInput, TokensUncheckedUpdateManyInput>
    /**
     * Filter which Tokens to update
     */
    where?: TokensWhereInput
    /**
     * Limit how many Tokens to update.
     */
    limit?: number
  }

  /**
   * Tokens upsert
   */
  export type TokensUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tokens
     */
    select?: TokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tokens
     */
    omit?: TokensOmit<ExtArgs> | null
    /**
     * The filter to search for the Tokens to update in case it exists.
     */
    where: TokensWhereUniqueInput
    /**
     * In case the Tokens found by the `where` argument doesn't exist, create a new Tokens with this data.
     */
    create: XOR<TokensCreateInput, TokensUncheckedCreateInput>
    /**
     * In case the Tokens was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TokensUpdateInput, TokensUncheckedUpdateInput>
  }

  /**
   * Tokens delete
   */
  export type TokensDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tokens
     */
    select?: TokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tokens
     */
    omit?: TokensOmit<ExtArgs> | null
    /**
     * Filter which Tokens to delete.
     */
    where: TokensWhereUniqueInput
  }

  /**
   * Tokens deleteMany
   */
  export type TokensDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tokens to delete
     */
    where?: TokensWhereInput
    /**
     * Limit how many Tokens to delete.
     */
    limit?: number
  }

  /**
   * Tokens without action
   */
  export type TokensDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tokens
     */
    select?: TokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tokens
     */
    omit?: TokensOmit<ExtArgs> | null
  }


  /**
   * Model Organization
   */

  export type AggregateOrganization = {
    _count: OrganizationCountAggregateOutputType | null
    _min: OrganizationMinAggregateOutputType | null
    _max: OrganizationMaxAggregateOutputType | null
  }

  export type OrganizationMinAggregateOutputType = {
    organizationId: string | null
    name: string | null
    createdBy: string | null
    createdAt: Date | null
  }

  export type OrganizationMaxAggregateOutputType = {
    organizationId: string | null
    name: string | null
    createdBy: string | null
    createdAt: Date | null
  }

  export type OrganizationCountAggregateOutputType = {
    organizationId: number
    name: number
    createdBy: number
    createdAt: number
    _all: number
  }


  export type OrganizationMinAggregateInputType = {
    organizationId?: true
    name?: true
    createdBy?: true
    createdAt?: true
  }

  export type OrganizationMaxAggregateInputType = {
    organizationId?: true
    name?: true
    createdBy?: true
    createdAt?: true
  }

  export type OrganizationCountAggregateInputType = {
    organizationId?: true
    name?: true
    createdBy?: true
    createdAt?: true
    _all?: true
  }

  export type OrganizationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organization to aggregate.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Organizations
    **/
    _count?: true | OrganizationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrganizationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrganizationMaxAggregateInputType
  }

  export type GetOrganizationAggregateType<T extends OrganizationAggregateArgs> = {
        [P in keyof T & keyof AggregateOrganization]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganization[P]>
      : GetScalarType<T[P], AggregateOrganization[P]>
  }




  export type OrganizationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrganizationWhereInput
    orderBy?: OrganizationOrderByWithAggregationInput | OrganizationOrderByWithAggregationInput[]
    by: OrganizationScalarFieldEnum[] | OrganizationScalarFieldEnum
    having?: OrganizationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrganizationCountAggregateInputType | true
    _min?: OrganizationMinAggregateInputType
    _max?: OrganizationMaxAggregateInputType
  }

  export type OrganizationGroupByOutputType = {
    organizationId: string
    name: string
    createdBy: string
    createdAt: Date
    _count: OrganizationCountAggregateOutputType | null
    _min: OrganizationMinAggregateOutputType | null
    _max: OrganizationMaxAggregateOutputType | null
  }

  type GetOrganizationGroupByPayload<T extends OrganizationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrganizationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrganizationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
            : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
        }
      >
    >


  export type OrganizationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    organizationId?: boolean
    name?: boolean
    createdBy?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["organization"]>

  export type OrganizationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    organizationId?: boolean
    name?: boolean
    createdBy?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["organization"]>

  export type OrganizationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    organizationId?: boolean
    name?: boolean
    createdBy?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["organization"]>

  export type OrganizationSelectScalar = {
    organizationId?: boolean
    name?: boolean
    createdBy?: boolean
    createdAt?: boolean
  }

  export type OrganizationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"organizationId" | "name" | "createdBy" | "createdAt", ExtArgs["result"]["organization"]>

  export type $OrganizationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Organization"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      organizationId: string
      name: string
      createdBy: string
      createdAt: Date
    }, ExtArgs["result"]["organization"]>
    composites: {}
  }

  type OrganizationGetPayload<S extends boolean | null | undefined | OrganizationDefaultArgs> = $Result.GetResult<Prisma.$OrganizationPayload, S>

  type OrganizationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrganizationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrganizationCountAggregateInputType | true
    }

  export interface OrganizationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Organization'], meta: { name: 'Organization' } }
    /**
     * Find zero or one Organization that matches the filter.
     * @param {OrganizationFindUniqueArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrganizationFindUniqueArgs>(args: SelectSubset<T, OrganizationFindUniqueArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Organization that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrganizationFindUniqueOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrganizationFindUniqueOrThrowArgs>(args: SelectSubset<T, OrganizationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Organization that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindFirstArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrganizationFindFirstArgs>(args?: SelectSubset<T, OrganizationFindFirstArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Organization that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindFirstOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrganizationFindFirstOrThrowArgs>(args?: SelectSubset<T, OrganizationFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Organizations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Organizations
     * const organizations = await prisma.organization.findMany()
     * 
     * // Get first 10 Organizations
     * const organizations = await prisma.organization.findMany({ take: 10 })
     * 
     * // Only select the `organizationId`
     * const organizationWithOrganizationIdOnly = await prisma.organization.findMany({ select: { organizationId: true } })
     * 
     */
    findMany<T extends OrganizationFindManyArgs>(args?: SelectSubset<T, OrganizationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Organization.
     * @param {OrganizationCreateArgs} args - Arguments to create a Organization.
     * @example
     * // Create one Organization
     * const Organization = await prisma.organization.create({
     *   data: {
     *     // ... data to create a Organization
     *   }
     * })
     * 
     */
    create<T extends OrganizationCreateArgs>(args: SelectSubset<T, OrganizationCreateArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Organizations.
     * @param {OrganizationCreateManyArgs} args - Arguments to create many Organizations.
     * @example
     * // Create many Organizations
     * const organization = await prisma.organization.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrganizationCreateManyArgs>(args?: SelectSubset<T, OrganizationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Organizations and returns the data saved in the database.
     * @param {OrganizationCreateManyAndReturnArgs} args - Arguments to create many Organizations.
     * @example
     * // Create many Organizations
     * const organization = await prisma.organization.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Organizations and only return the `organizationId`
     * const organizationWithOrganizationIdOnly = await prisma.organization.createManyAndReturn({
     *   select: { organizationId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrganizationCreateManyAndReturnArgs>(args?: SelectSubset<T, OrganizationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Organization.
     * @param {OrganizationDeleteArgs} args - Arguments to delete one Organization.
     * @example
     * // Delete one Organization
     * const Organization = await prisma.organization.delete({
     *   where: {
     *     // ... filter to delete one Organization
     *   }
     * })
     * 
     */
    delete<T extends OrganizationDeleteArgs>(args: SelectSubset<T, OrganizationDeleteArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Organization.
     * @param {OrganizationUpdateArgs} args - Arguments to update one Organization.
     * @example
     * // Update one Organization
     * const organization = await prisma.organization.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrganizationUpdateArgs>(args: SelectSubset<T, OrganizationUpdateArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Organizations.
     * @param {OrganizationDeleteManyArgs} args - Arguments to filter Organizations to delete.
     * @example
     * // Delete a few Organizations
     * const { count } = await prisma.organization.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrganizationDeleteManyArgs>(args?: SelectSubset<T, OrganizationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Organizations
     * const organization = await prisma.organization.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrganizationUpdateManyArgs>(args: SelectSubset<T, OrganizationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organizations and returns the data updated in the database.
     * @param {OrganizationUpdateManyAndReturnArgs} args - Arguments to update many Organizations.
     * @example
     * // Update many Organizations
     * const organization = await prisma.organization.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Organizations and only return the `organizationId`
     * const organizationWithOrganizationIdOnly = await prisma.organization.updateManyAndReturn({
     *   select: { organizationId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrganizationUpdateManyAndReturnArgs>(args: SelectSubset<T, OrganizationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Organization.
     * @param {OrganizationUpsertArgs} args - Arguments to update or create a Organization.
     * @example
     * // Update or create a Organization
     * const organization = await prisma.organization.upsert({
     *   create: {
     *     // ... data to create a Organization
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Organization we want to update
     *   }
     * })
     */
    upsert<T extends OrganizationUpsertArgs>(args: SelectSubset<T, OrganizationUpsertArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationCountArgs} args - Arguments to filter Organizations to count.
     * @example
     * // Count the number of Organizations
     * const count = await prisma.organization.count({
     *   where: {
     *     // ... the filter for the Organizations we want to count
     *   }
     * })
    **/
    count<T extends OrganizationCountArgs>(
      args?: Subset<T, OrganizationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrganizationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrganizationAggregateArgs>(args: Subset<T, OrganizationAggregateArgs>): Prisma.PrismaPromise<GetOrganizationAggregateType<T>>

    /**
     * Group by Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrganizationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrganizationGroupByArgs['orderBy'] }
        : { orderBy?: OrganizationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrganizationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrganizationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Organization model
   */
  readonly fields: OrganizationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Organization.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrganizationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Organization model
   */
  interface OrganizationFieldRefs {
    readonly organizationId: FieldRef<"Organization", 'String'>
    readonly name: FieldRef<"Organization", 'String'>
    readonly createdBy: FieldRef<"Organization", 'String'>
    readonly createdAt: FieldRef<"Organization", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Organization findUnique
   */
  export type OrganizationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization findUniqueOrThrow
   */
  export type OrganizationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization findFirst
   */
  export type OrganizationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization findFirstOrThrow
   */
  export type OrganizationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization findMany
   */
  export type OrganizationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Filter, which Organizations to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization create
   */
  export type OrganizationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * The data needed to create a Organization.
     */
    data: XOR<OrganizationCreateInput, OrganizationUncheckedCreateInput>
  }

  /**
   * Organization createMany
   */
  export type OrganizationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Organizations.
     */
    data: OrganizationCreateManyInput | OrganizationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Organization createManyAndReturn
   */
  export type OrganizationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * The data used to create many Organizations.
     */
    data: OrganizationCreateManyInput | OrganizationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Organization update
   */
  export type OrganizationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * The data needed to update a Organization.
     */
    data: XOR<OrganizationUpdateInput, OrganizationUncheckedUpdateInput>
    /**
     * Choose, which Organization to update.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization updateMany
   */
  export type OrganizationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Organizations.
     */
    data: XOR<OrganizationUpdateManyMutationInput, OrganizationUncheckedUpdateManyInput>
    /**
     * Filter which Organizations to update
     */
    where?: OrganizationWhereInput
    /**
     * Limit how many Organizations to update.
     */
    limit?: number
  }

  /**
   * Organization updateManyAndReturn
   */
  export type OrganizationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * The data used to update Organizations.
     */
    data: XOR<OrganizationUpdateManyMutationInput, OrganizationUncheckedUpdateManyInput>
    /**
     * Filter which Organizations to update
     */
    where?: OrganizationWhereInput
    /**
     * Limit how many Organizations to update.
     */
    limit?: number
  }

  /**
   * Organization upsert
   */
  export type OrganizationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * The filter to search for the Organization to update in case it exists.
     */
    where: OrganizationWhereUniqueInput
    /**
     * In case the Organization found by the `where` argument doesn't exist, create a new Organization with this data.
     */
    create: XOR<OrganizationCreateInput, OrganizationUncheckedCreateInput>
    /**
     * In case the Organization was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrganizationUpdateInput, OrganizationUncheckedUpdateInput>
  }

  /**
   * Organization delete
   */
  export type OrganizationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Filter which Organization to delete.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization deleteMany
   */
  export type OrganizationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organizations to delete
     */
    where?: OrganizationWhereInput
    /**
     * Limit how many Organizations to delete.
     */
    limit?: number
  }

  /**
   * Organization without action
   */
  export type OrganizationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
  }


  /**
   * Model Organization_Users
   */

  export type AggregateOrganization_Users = {
    _count: Organization_UsersCountAggregateOutputType | null
    _min: Organization_UsersMinAggregateOutputType | null
    _max: Organization_UsersMaxAggregateOutputType | null
  }

  export type Organization_UsersMinAggregateOutputType = {
    organizationId: string | null
    userId: string | null
    role: $Enums.OrganizationRole | null
  }

  export type Organization_UsersMaxAggregateOutputType = {
    organizationId: string | null
    userId: string | null
    role: $Enums.OrganizationRole | null
  }

  export type Organization_UsersCountAggregateOutputType = {
    organizationId: number
    userId: number
    role: number
    _all: number
  }


  export type Organization_UsersMinAggregateInputType = {
    organizationId?: true
    userId?: true
    role?: true
  }

  export type Organization_UsersMaxAggregateInputType = {
    organizationId?: true
    userId?: true
    role?: true
  }

  export type Organization_UsersCountAggregateInputType = {
    organizationId?: true
    userId?: true
    role?: true
    _all?: true
  }

  export type Organization_UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organization_Users to aggregate.
     */
    where?: Organization_UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organization_Users to fetch.
     */
    orderBy?: Organization_UsersOrderByWithRelationInput | Organization_UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Organization_UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organization_Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organization_Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Organization_Users
    **/
    _count?: true | Organization_UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Organization_UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Organization_UsersMaxAggregateInputType
  }

  export type GetOrganization_UsersAggregateType<T extends Organization_UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateOrganization_Users]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganization_Users[P]>
      : GetScalarType<T[P], AggregateOrganization_Users[P]>
  }




  export type Organization_UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Organization_UsersWhereInput
    orderBy?: Organization_UsersOrderByWithAggregationInput | Organization_UsersOrderByWithAggregationInput[]
    by: Organization_UsersScalarFieldEnum[] | Organization_UsersScalarFieldEnum
    having?: Organization_UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Organization_UsersCountAggregateInputType | true
    _min?: Organization_UsersMinAggregateInputType
    _max?: Organization_UsersMaxAggregateInputType
  }

  export type Organization_UsersGroupByOutputType = {
    organizationId: string
    userId: string
    role: $Enums.OrganizationRole
    _count: Organization_UsersCountAggregateOutputType | null
    _min: Organization_UsersMinAggregateOutputType | null
    _max: Organization_UsersMaxAggregateOutputType | null
  }

  type GetOrganization_UsersGroupByPayload<T extends Organization_UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Organization_UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Organization_UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Organization_UsersGroupByOutputType[P]>
            : GetScalarType<T[P], Organization_UsersGroupByOutputType[P]>
        }
      >
    >


  export type Organization_UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    organizationId?: boolean
    userId?: boolean
    role?: boolean
  }, ExtArgs["result"]["organization_Users"]>

  export type Organization_UsersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    organizationId?: boolean
    userId?: boolean
    role?: boolean
  }, ExtArgs["result"]["organization_Users"]>

  export type Organization_UsersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    organizationId?: boolean
    userId?: boolean
    role?: boolean
  }, ExtArgs["result"]["organization_Users"]>

  export type Organization_UsersSelectScalar = {
    organizationId?: boolean
    userId?: boolean
    role?: boolean
  }

  export type Organization_UsersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"organizationId" | "userId" | "role", ExtArgs["result"]["organization_Users"]>

  export type $Organization_UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Organization_Users"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      organizationId: string
      userId: string
      role: $Enums.OrganizationRole
    }, ExtArgs["result"]["organization_Users"]>
    composites: {}
  }

  type Organization_UsersGetPayload<S extends boolean | null | undefined | Organization_UsersDefaultArgs> = $Result.GetResult<Prisma.$Organization_UsersPayload, S>

  type Organization_UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Organization_UsersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Organization_UsersCountAggregateInputType | true
    }

  export interface Organization_UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Organization_Users'], meta: { name: 'Organization_Users' } }
    /**
     * Find zero or one Organization_Users that matches the filter.
     * @param {Organization_UsersFindUniqueArgs} args - Arguments to find a Organization_Users
     * @example
     * // Get one Organization_Users
     * const organization_Users = await prisma.organization_Users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Organization_UsersFindUniqueArgs>(args: SelectSubset<T, Organization_UsersFindUniqueArgs<ExtArgs>>): Prisma__Organization_UsersClient<$Result.GetResult<Prisma.$Organization_UsersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Organization_Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Organization_UsersFindUniqueOrThrowArgs} args - Arguments to find a Organization_Users
     * @example
     * // Get one Organization_Users
     * const organization_Users = await prisma.organization_Users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Organization_UsersFindUniqueOrThrowArgs>(args: SelectSubset<T, Organization_UsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Organization_UsersClient<$Result.GetResult<Prisma.$Organization_UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Organization_Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Organization_UsersFindFirstArgs} args - Arguments to find a Organization_Users
     * @example
     * // Get one Organization_Users
     * const organization_Users = await prisma.organization_Users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Organization_UsersFindFirstArgs>(args?: SelectSubset<T, Organization_UsersFindFirstArgs<ExtArgs>>): Prisma__Organization_UsersClient<$Result.GetResult<Prisma.$Organization_UsersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Organization_Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Organization_UsersFindFirstOrThrowArgs} args - Arguments to find a Organization_Users
     * @example
     * // Get one Organization_Users
     * const organization_Users = await prisma.organization_Users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Organization_UsersFindFirstOrThrowArgs>(args?: SelectSubset<T, Organization_UsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__Organization_UsersClient<$Result.GetResult<Prisma.$Organization_UsersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Organization_Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Organization_UsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Organization_Users
     * const organization_Users = await prisma.organization_Users.findMany()
     * 
     * // Get first 10 Organization_Users
     * const organization_Users = await prisma.organization_Users.findMany({ take: 10 })
     * 
     * // Only select the `organizationId`
     * const organization_UsersWithOrganizationIdOnly = await prisma.organization_Users.findMany({ select: { organizationId: true } })
     * 
     */
    findMany<T extends Organization_UsersFindManyArgs>(args?: SelectSubset<T, Organization_UsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Organization_UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Organization_Users.
     * @param {Organization_UsersCreateArgs} args - Arguments to create a Organization_Users.
     * @example
     * // Create one Organization_Users
     * const Organization_Users = await prisma.organization_Users.create({
     *   data: {
     *     // ... data to create a Organization_Users
     *   }
     * })
     * 
     */
    create<T extends Organization_UsersCreateArgs>(args: SelectSubset<T, Organization_UsersCreateArgs<ExtArgs>>): Prisma__Organization_UsersClient<$Result.GetResult<Prisma.$Organization_UsersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Organization_Users.
     * @param {Organization_UsersCreateManyArgs} args - Arguments to create many Organization_Users.
     * @example
     * // Create many Organization_Users
     * const organization_Users = await prisma.organization_Users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Organization_UsersCreateManyArgs>(args?: SelectSubset<T, Organization_UsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Organization_Users and returns the data saved in the database.
     * @param {Organization_UsersCreateManyAndReturnArgs} args - Arguments to create many Organization_Users.
     * @example
     * // Create many Organization_Users
     * const organization_Users = await prisma.organization_Users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Organization_Users and only return the `organizationId`
     * const organization_UsersWithOrganizationIdOnly = await prisma.organization_Users.createManyAndReturn({
     *   select: { organizationId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Organization_UsersCreateManyAndReturnArgs>(args?: SelectSubset<T, Organization_UsersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Organization_UsersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Organization_Users.
     * @param {Organization_UsersDeleteArgs} args - Arguments to delete one Organization_Users.
     * @example
     * // Delete one Organization_Users
     * const Organization_Users = await prisma.organization_Users.delete({
     *   where: {
     *     // ... filter to delete one Organization_Users
     *   }
     * })
     * 
     */
    delete<T extends Organization_UsersDeleteArgs>(args: SelectSubset<T, Organization_UsersDeleteArgs<ExtArgs>>): Prisma__Organization_UsersClient<$Result.GetResult<Prisma.$Organization_UsersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Organization_Users.
     * @param {Organization_UsersUpdateArgs} args - Arguments to update one Organization_Users.
     * @example
     * // Update one Organization_Users
     * const organization_Users = await prisma.organization_Users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Organization_UsersUpdateArgs>(args: SelectSubset<T, Organization_UsersUpdateArgs<ExtArgs>>): Prisma__Organization_UsersClient<$Result.GetResult<Prisma.$Organization_UsersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Organization_Users.
     * @param {Organization_UsersDeleteManyArgs} args - Arguments to filter Organization_Users to delete.
     * @example
     * // Delete a few Organization_Users
     * const { count } = await prisma.organization_Users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Organization_UsersDeleteManyArgs>(args?: SelectSubset<T, Organization_UsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organization_Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Organization_UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Organization_Users
     * const organization_Users = await prisma.organization_Users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Organization_UsersUpdateManyArgs>(args: SelectSubset<T, Organization_UsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organization_Users and returns the data updated in the database.
     * @param {Organization_UsersUpdateManyAndReturnArgs} args - Arguments to update many Organization_Users.
     * @example
     * // Update many Organization_Users
     * const organization_Users = await prisma.organization_Users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Organization_Users and only return the `organizationId`
     * const organization_UsersWithOrganizationIdOnly = await prisma.organization_Users.updateManyAndReturn({
     *   select: { organizationId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends Organization_UsersUpdateManyAndReturnArgs>(args: SelectSubset<T, Organization_UsersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Organization_UsersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Organization_Users.
     * @param {Organization_UsersUpsertArgs} args - Arguments to update or create a Organization_Users.
     * @example
     * // Update or create a Organization_Users
     * const organization_Users = await prisma.organization_Users.upsert({
     *   create: {
     *     // ... data to create a Organization_Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Organization_Users we want to update
     *   }
     * })
     */
    upsert<T extends Organization_UsersUpsertArgs>(args: SelectSubset<T, Organization_UsersUpsertArgs<ExtArgs>>): Prisma__Organization_UsersClient<$Result.GetResult<Prisma.$Organization_UsersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Organization_Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Organization_UsersCountArgs} args - Arguments to filter Organization_Users to count.
     * @example
     * // Count the number of Organization_Users
     * const count = await prisma.organization_Users.count({
     *   where: {
     *     // ... the filter for the Organization_Users we want to count
     *   }
     * })
    **/
    count<T extends Organization_UsersCountArgs>(
      args?: Subset<T, Organization_UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Organization_UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Organization_Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Organization_UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Organization_UsersAggregateArgs>(args: Subset<T, Organization_UsersAggregateArgs>): Prisma.PrismaPromise<GetOrganization_UsersAggregateType<T>>

    /**
     * Group by Organization_Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Organization_UsersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Organization_UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Organization_UsersGroupByArgs['orderBy'] }
        : { orderBy?: Organization_UsersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Organization_UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrganization_UsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Organization_Users model
   */
  readonly fields: Organization_UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Organization_Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Organization_UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Organization_Users model
   */
  interface Organization_UsersFieldRefs {
    readonly organizationId: FieldRef<"Organization_Users", 'String'>
    readonly userId: FieldRef<"Organization_Users", 'String'>
    readonly role: FieldRef<"Organization_Users", 'OrganizationRole'>
  }
    

  // Custom InputTypes
  /**
   * Organization_Users findUnique
   */
  export type Organization_UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization_Users
     */
    select?: Organization_UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization_Users
     */
    omit?: Organization_UsersOmit<ExtArgs> | null
    /**
     * Filter, which Organization_Users to fetch.
     */
    where: Organization_UsersWhereUniqueInput
  }

  /**
   * Organization_Users findUniqueOrThrow
   */
  export type Organization_UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization_Users
     */
    select?: Organization_UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization_Users
     */
    omit?: Organization_UsersOmit<ExtArgs> | null
    /**
     * Filter, which Organization_Users to fetch.
     */
    where: Organization_UsersWhereUniqueInput
  }

  /**
   * Organization_Users findFirst
   */
  export type Organization_UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization_Users
     */
    select?: Organization_UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization_Users
     */
    omit?: Organization_UsersOmit<ExtArgs> | null
    /**
     * Filter, which Organization_Users to fetch.
     */
    where?: Organization_UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organization_Users to fetch.
     */
    orderBy?: Organization_UsersOrderByWithRelationInput | Organization_UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organization_Users.
     */
    cursor?: Organization_UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organization_Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organization_Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organization_Users.
     */
    distinct?: Organization_UsersScalarFieldEnum | Organization_UsersScalarFieldEnum[]
  }

  /**
   * Organization_Users findFirstOrThrow
   */
  export type Organization_UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization_Users
     */
    select?: Organization_UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization_Users
     */
    omit?: Organization_UsersOmit<ExtArgs> | null
    /**
     * Filter, which Organization_Users to fetch.
     */
    where?: Organization_UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organization_Users to fetch.
     */
    orderBy?: Organization_UsersOrderByWithRelationInput | Organization_UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organization_Users.
     */
    cursor?: Organization_UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organization_Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organization_Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organization_Users.
     */
    distinct?: Organization_UsersScalarFieldEnum | Organization_UsersScalarFieldEnum[]
  }

  /**
   * Organization_Users findMany
   */
  export type Organization_UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization_Users
     */
    select?: Organization_UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization_Users
     */
    omit?: Organization_UsersOmit<ExtArgs> | null
    /**
     * Filter, which Organization_Users to fetch.
     */
    where?: Organization_UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organization_Users to fetch.
     */
    orderBy?: Organization_UsersOrderByWithRelationInput | Organization_UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Organization_Users.
     */
    cursor?: Organization_UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organization_Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organization_Users.
     */
    skip?: number
    distinct?: Organization_UsersScalarFieldEnum | Organization_UsersScalarFieldEnum[]
  }

  /**
   * Organization_Users create
   */
  export type Organization_UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization_Users
     */
    select?: Organization_UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization_Users
     */
    omit?: Organization_UsersOmit<ExtArgs> | null
    /**
     * The data needed to create a Organization_Users.
     */
    data: XOR<Organization_UsersCreateInput, Organization_UsersUncheckedCreateInput>
  }

  /**
   * Organization_Users createMany
   */
  export type Organization_UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Organization_Users.
     */
    data: Organization_UsersCreateManyInput | Organization_UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Organization_Users createManyAndReturn
   */
  export type Organization_UsersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization_Users
     */
    select?: Organization_UsersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Organization_Users
     */
    omit?: Organization_UsersOmit<ExtArgs> | null
    /**
     * The data used to create many Organization_Users.
     */
    data: Organization_UsersCreateManyInput | Organization_UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Organization_Users update
   */
  export type Organization_UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization_Users
     */
    select?: Organization_UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization_Users
     */
    omit?: Organization_UsersOmit<ExtArgs> | null
    /**
     * The data needed to update a Organization_Users.
     */
    data: XOR<Organization_UsersUpdateInput, Organization_UsersUncheckedUpdateInput>
    /**
     * Choose, which Organization_Users to update.
     */
    where: Organization_UsersWhereUniqueInput
  }

  /**
   * Organization_Users updateMany
   */
  export type Organization_UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Organization_Users.
     */
    data: XOR<Organization_UsersUpdateManyMutationInput, Organization_UsersUncheckedUpdateManyInput>
    /**
     * Filter which Organization_Users to update
     */
    where?: Organization_UsersWhereInput
    /**
     * Limit how many Organization_Users to update.
     */
    limit?: number
  }

  /**
   * Organization_Users updateManyAndReturn
   */
  export type Organization_UsersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization_Users
     */
    select?: Organization_UsersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Organization_Users
     */
    omit?: Organization_UsersOmit<ExtArgs> | null
    /**
     * The data used to update Organization_Users.
     */
    data: XOR<Organization_UsersUpdateManyMutationInput, Organization_UsersUncheckedUpdateManyInput>
    /**
     * Filter which Organization_Users to update
     */
    where?: Organization_UsersWhereInput
    /**
     * Limit how many Organization_Users to update.
     */
    limit?: number
  }

  /**
   * Organization_Users upsert
   */
  export type Organization_UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization_Users
     */
    select?: Organization_UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization_Users
     */
    omit?: Organization_UsersOmit<ExtArgs> | null
    /**
     * The filter to search for the Organization_Users to update in case it exists.
     */
    where: Organization_UsersWhereUniqueInput
    /**
     * In case the Organization_Users found by the `where` argument doesn't exist, create a new Organization_Users with this data.
     */
    create: XOR<Organization_UsersCreateInput, Organization_UsersUncheckedCreateInput>
    /**
     * In case the Organization_Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Organization_UsersUpdateInput, Organization_UsersUncheckedUpdateInput>
  }

  /**
   * Organization_Users delete
   */
  export type Organization_UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization_Users
     */
    select?: Organization_UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization_Users
     */
    omit?: Organization_UsersOmit<ExtArgs> | null
    /**
     * Filter which Organization_Users to delete.
     */
    where: Organization_UsersWhereUniqueInput
  }

  /**
   * Organization_Users deleteMany
   */
  export type Organization_UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organization_Users to delete
     */
    where?: Organization_UsersWhereInput
    /**
     * Limit how many Organization_Users to delete.
     */
    limit?: number
  }

  /**
   * Organization_Users without action
   */
  export type Organization_UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization_Users
     */
    select?: Organization_UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization_Users
     */
    omit?: Organization_UsersOmit<ExtArgs> | null
  }


  /**
   * Model Warehouses
   */

  export type AggregateWarehouses = {
    _count: WarehousesCountAggregateOutputType | null
    _avg: WarehousesAvgAggregateOutputType | null
    _sum: WarehousesSumAggregateOutputType | null
    _min: WarehousesMinAggregateOutputType | null
    _max: WarehousesMaxAggregateOutputType | null
  }

  export type WarehousesAvgAggregateOutputType = {
    organizationId: number | null
  }

  export type WarehousesSumAggregateOutputType = {
    organizationId: number | null
  }

  export type WarehousesMinAggregateOutputType = {
    warehouseId: string | null
    organizationId: number | null
    name: string | null
    address: string | null
    city: string | null
    state: string | null
    zip: string | null
    country: string | null
    status: $Enums.WarehouseStatus | null
    createdAt: Date | null
  }

  export type WarehousesMaxAggregateOutputType = {
    warehouseId: string | null
    organizationId: number | null
    name: string | null
    address: string | null
    city: string | null
    state: string | null
    zip: string | null
    country: string | null
    status: $Enums.WarehouseStatus | null
    createdAt: Date | null
  }

  export type WarehousesCountAggregateOutputType = {
    warehouseId: number
    organizationId: number
    name: number
    address: number
    city: number
    state: number
    zip: number
    country: number
    status: number
    createdAt: number
    _all: number
  }


  export type WarehousesAvgAggregateInputType = {
    organizationId?: true
  }

  export type WarehousesSumAggregateInputType = {
    organizationId?: true
  }

  export type WarehousesMinAggregateInputType = {
    warehouseId?: true
    organizationId?: true
    name?: true
    address?: true
    city?: true
    state?: true
    zip?: true
    country?: true
    status?: true
    createdAt?: true
  }

  export type WarehousesMaxAggregateInputType = {
    warehouseId?: true
    organizationId?: true
    name?: true
    address?: true
    city?: true
    state?: true
    zip?: true
    country?: true
    status?: true
    createdAt?: true
  }

  export type WarehousesCountAggregateInputType = {
    warehouseId?: true
    organizationId?: true
    name?: true
    address?: true
    city?: true
    state?: true
    zip?: true
    country?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type WarehousesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Warehouses to aggregate.
     */
    where?: WarehousesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Warehouses to fetch.
     */
    orderBy?: WarehousesOrderByWithRelationInput | WarehousesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WarehousesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Warehouses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Warehouses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Warehouses
    **/
    _count?: true | WarehousesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WarehousesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WarehousesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WarehousesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WarehousesMaxAggregateInputType
  }

  export type GetWarehousesAggregateType<T extends WarehousesAggregateArgs> = {
        [P in keyof T & keyof AggregateWarehouses]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWarehouses[P]>
      : GetScalarType<T[P], AggregateWarehouses[P]>
  }




  export type WarehousesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WarehousesWhereInput
    orderBy?: WarehousesOrderByWithAggregationInput | WarehousesOrderByWithAggregationInput[]
    by: WarehousesScalarFieldEnum[] | WarehousesScalarFieldEnum
    having?: WarehousesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WarehousesCountAggregateInputType | true
    _avg?: WarehousesAvgAggregateInputType
    _sum?: WarehousesSumAggregateInputType
    _min?: WarehousesMinAggregateInputType
    _max?: WarehousesMaxAggregateInputType
  }

  export type WarehousesGroupByOutputType = {
    warehouseId: string
    organizationId: number
    name: string
    address: string
    city: string
    state: string
    zip: string
    country: string
    status: $Enums.WarehouseStatus
    createdAt: Date
    _count: WarehousesCountAggregateOutputType | null
    _avg: WarehousesAvgAggregateOutputType | null
    _sum: WarehousesSumAggregateOutputType | null
    _min: WarehousesMinAggregateOutputType | null
    _max: WarehousesMaxAggregateOutputType | null
  }

  type GetWarehousesGroupByPayload<T extends WarehousesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WarehousesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WarehousesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WarehousesGroupByOutputType[P]>
            : GetScalarType<T[P], WarehousesGroupByOutputType[P]>
        }
      >
    >


  export type WarehousesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    warehouseId?: boolean
    organizationId?: boolean
    name?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    zip?: boolean
    country?: boolean
    status?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["warehouses"]>

  export type WarehousesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    warehouseId?: boolean
    organizationId?: boolean
    name?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    zip?: boolean
    country?: boolean
    status?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["warehouses"]>

  export type WarehousesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    warehouseId?: boolean
    organizationId?: boolean
    name?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    zip?: boolean
    country?: boolean
    status?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["warehouses"]>

  export type WarehousesSelectScalar = {
    warehouseId?: boolean
    organizationId?: boolean
    name?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    zip?: boolean
    country?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type WarehousesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"warehouseId" | "organizationId" | "name" | "address" | "city" | "state" | "zip" | "country" | "status" | "createdAt", ExtArgs["result"]["warehouses"]>

  export type $WarehousesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Warehouses"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      warehouseId: string
      organizationId: number
      name: string
      address: string
      city: string
      state: string
      zip: string
      country: string
      status: $Enums.WarehouseStatus
      createdAt: Date
    }, ExtArgs["result"]["warehouses"]>
    composites: {}
  }

  type WarehousesGetPayload<S extends boolean | null | undefined | WarehousesDefaultArgs> = $Result.GetResult<Prisma.$WarehousesPayload, S>

  type WarehousesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WarehousesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WarehousesCountAggregateInputType | true
    }

  export interface WarehousesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Warehouses'], meta: { name: 'Warehouses' } }
    /**
     * Find zero or one Warehouses that matches the filter.
     * @param {WarehousesFindUniqueArgs} args - Arguments to find a Warehouses
     * @example
     * // Get one Warehouses
     * const warehouses = await prisma.warehouses.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WarehousesFindUniqueArgs>(args: SelectSubset<T, WarehousesFindUniqueArgs<ExtArgs>>): Prisma__WarehousesClient<$Result.GetResult<Prisma.$WarehousesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Warehouses that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WarehousesFindUniqueOrThrowArgs} args - Arguments to find a Warehouses
     * @example
     * // Get one Warehouses
     * const warehouses = await prisma.warehouses.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WarehousesFindUniqueOrThrowArgs>(args: SelectSubset<T, WarehousesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WarehousesClient<$Result.GetResult<Prisma.$WarehousesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Warehouses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarehousesFindFirstArgs} args - Arguments to find a Warehouses
     * @example
     * // Get one Warehouses
     * const warehouses = await prisma.warehouses.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WarehousesFindFirstArgs>(args?: SelectSubset<T, WarehousesFindFirstArgs<ExtArgs>>): Prisma__WarehousesClient<$Result.GetResult<Prisma.$WarehousesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Warehouses that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarehousesFindFirstOrThrowArgs} args - Arguments to find a Warehouses
     * @example
     * // Get one Warehouses
     * const warehouses = await prisma.warehouses.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WarehousesFindFirstOrThrowArgs>(args?: SelectSubset<T, WarehousesFindFirstOrThrowArgs<ExtArgs>>): Prisma__WarehousesClient<$Result.GetResult<Prisma.$WarehousesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Warehouses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarehousesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Warehouses
     * const warehouses = await prisma.warehouses.findMany()
     * 
     * // Get first 10 Warehouses
     * const warehouses = await prisma.warehouses.findMany({ take: 10 })
     * 
     * // Only select the `warehouseId`
     * const warehousesWithWarehouseIdOnly = await prisma.warehouses.findMany({ select: { warehouseId: true } })
     * 
     */
    findMany<T extends WarehousesFindManyArgs>(args?: SelectSubset<T, WarehousesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WarehousesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Warehouses.
     * @param {WarehousesCreateArgs} args - Arguments to create a Warehouses.
     * @example
     * // Create one Warehouses
     * const Warehouses = await prisma.warehouses.create({
     *   data: {
     *     // ... data to create a Warehouses
     *   }
     * })
     * 
     */
    create<T extends WarehousesCreateArgs>(args: SelectSubset<T, WarehousesCreateArgs<ExtArgs>>): Prisma__WarehousesClient<$Result.GetResult<Prisma.$WarehousesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Warehouses.
     * @param {WarehousesCreateManyArgs} args - Arguments to create many Warehouses.
     * @example
     * // Create many Warehouses
     * const warehouses = await prisma.warehouses.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WarehousesCreateManyArgs>(args?: SelectSubset<T, WarehousesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Warehouses and returns the data saved in the database.
     * @param {WarehousesCreateManyAndReturnArgs} args - Arguments to create many Warehouses.
     * @example
     * // Create many Warehouses
     * const warehouses = await prisma.warehouses.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Warehouses and only return the `warehouseId`
     * const warehousesWithWarehouseIdOnly = await prisma.warehouses.createManyAndReturn({
     *   select: { warehouseId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WarehousesCreateManyAndReturnArgs>(args?: SelectSubset<T, WarehousesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WarehousesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Warehouses.
     * @param {WarehousesDeleteArgs} args - Arguments to delete one Warehouses.
     * @example
     * // Delete one Warehouses
     * const Warehouses = await prisma.warehouses.delete({
     *   where: {
     *     // ... filter to delete one Warehouses
     *   }
     * })
     * 
     */
    delete<T extends WarehousesDeleteArgs>(args: SelectSubset<T, WarehousesDeleteArgs<ExtArgs>>): Prisma__WarehousesClient<$Result.GetResult<Prisma.$WarehousesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Warehouses.
     * @param {WarehousesUpdateArgs} args - Arguments to update one Warehouses.
     * @example
     * // Update one Warehouses
     * const warehouses = await prisma.warehouses.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WarehousesUpdateArgs>(args: SelectSubset<T, WarehousesUpdateArgs<ExtArgs>>): Prisma__WarehousesClient<$Result.GetResult<Prisma.$WarehousesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Warehouses.
     * @param {WarehousesDeleteManyArgs} args - Arguments to filter Warehouses to delete.
     * @example
     * // Delete a few Warehouses
     * const { count } = await prisma.warehouses.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WarehousesDeleteManyArgs>(args?: SelectSubset<T, WarehousesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Warehouses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarehousesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Warehouses
     * const warehouses = await prisma.warehouses.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WarehousesUpdateManyArgs>(args: SelectSubset<T, WarehousesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Warehouses and returns the data updated in the database.
     * @param {WarehousesUpdateManyAndReturnArgs} args - Arguments to update many Warehouses.
     * @example
     * // Update many Warehouses
     * const warehouses = await prisma.warehouses.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Warehouses and only return the `warehouseId`
     * const warehousesWithWarehouseIdOnly = await prisma.warehouses.updateManyAndReturn({
     *   select: { warehouseId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WarehousesUpdateManyAndReturnArgs>(args: SelectSubset<T, WarehousesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WarehousesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Warehouses.
     * @param {WarehousesUpsertArgs} args - Arguments to update or create a Warehouses.
     * @example
     * // Update or create a Warehouses
     * const warehouses = await prisma.warehouses.upsert({
     *   create: {
     *     // ... data to create a Warehouses
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Warehouses we want to update
     *   }
     * })
     */
    upsert<T extends WarehousesUpsertArgs>(args: SelectSubset<T, WarehousesUpsertArgs<ExtArgs>>): Prisma__WarehousesClient<$Result.GetResult<Prisma.$WarehousesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Warehouses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarehousesCountArgs} args - Arguments to filter Warehouses to count.
     * @example
     * // Count the number of Warehouses
     * const count = await prisma.warehouses.count({
     *   where: {
     *     // ... the filter for the Warehouses we want to count
     *   }
     * })
    **/
    count<T extends WarehousesCountArgs>(
      args?: Subset<T, WarehousesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WarehousesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Warehouses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarehousesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WarehousesAggregateArgs>(args: Subset<T, WarehousesAggregateArgs>): Prisma.PrismaPromise<GetWarehousesAggregateType<T>>

    /**
     * Group by Warehouses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarehousesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WarehousesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WarehousesGroupByArgs['orderBy'] }
        : { orderBy?: WarehousesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WarehousesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWarehousesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Warehouses model
   */
  readonly fields: WarehousesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Warehouses.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WarehousesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Warehouses model
   */
  interface WarehousesFieldRefs {
    readonly warehouseId: FieldRef<"Warehouses", 'String'>
    readonly organizationId: FieldRef<"Warehouses", 'Int'>
    readonly name: FieldRef<"Warehouses", 'String'>
    readonly address: FieldRef<"Warehouses", 'String'>
    readonly city: FieldRef<"Warehouses", 'String'>
    readonly state: FieldRef<"Warehouses", 'String'>
    readonly zip: FieldRef<"Warehouses", 'String'>
    readonly country: FieldRef<"Warehouses", 'String'>
    readonly status: FieldRef<"Warehouses", 'WarehouseStatus'>
    readonly createdAt: FieldRef<"Warehouses", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Warehouses findUnique
   */
  export type WarehousesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouses
     */
    select?: WarehousesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warehouses
     */
    omit?: WarehousesOmit<ExtArgs> | null
    /**
     * Filter, which Warehouses to fetch.
     */
    where: WarehousesWhereUniqueInput
  }

  /**
   * Warehouses findUniqueOrThrow
   */
  export type WarehousesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouses
     */
    select?: WarehousesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warehouses
     */
    omit?: WarehousesOmit<ExtArgs> | null
    /**
     * Filter, which Warehouses to fetch.
     */
    where: WarehousesWhereUniqueInput
  }

  /**
   * Warehouses findFirst
   */
  export type WarehousesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouses
     */
    select?: WarehousesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warehouses
     */
    omit?: WarehousesOmit<ExtArgs> | null
    /**
     * Filter, which Warehouses to fetch.
     */
    where?: WarehousesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Warehouses to fetch.
     */
    orderBy?: WarehousesOrderByWithRelationInput | WarehousesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Warehouses.
     */
    cursor?: WarehousesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Warehouses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Warehouses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Warehouses.
     */
    distinct?: WarehousesScalarFieldEnum | WarehousesScalarFieldEnum[]
  }

  /**
   * Warehouses findFirstOrThrow
   */
  export type WarehousesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouses
     */
    select?: WarehousesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warehouses
     */
    omit?: WarehousesOmit<ExtArgs> | null
    /**
     * Filter, which Warehouses to fetch.
     */
    where?: WarehousesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Warehouses to fetch.
     */
    orderBy?: WarehousesOrderByWithRelationInput | WarehousesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Warehouses.
     */
    cursor?: WarehousesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Warehouses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Warehouses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Warehouses.
     */
    distinct?: WarehousesScalarFieldEnum | WarehousesScalarFieldEnum[]
  }

  /**
   * Warehouses findMany
   */
  export type WarehousesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouses
     */
    select?: WarehousesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warehouses
     */
    omit?: WarehousesOmit<ExtArgs> | null
    /**
     * Filter, which Warehouses to fetch.
     */
    where?: WarehousesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Warehouses to fetch.
     */
    orderBy?: WarehousesOrderByWithRelationInput | WarehousesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Warehouses.
     */
    cursor?: WarehousesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Warehouses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Warehouses.
     */
    skip?: number
    distinct?: WarehousesScalarFieldEnum | WarehousesScalarFieldEnum[]
  }

  /**
   * Warehouses create
   */
  export type WarehousesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouses
     */
    select?: WarehousesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warehouses
     */
    omit?: WarehousesOmit<ExtArgs> | null
    /**
     * The data needed to create a Warehouses.
     */
    data: XOR<WarehousesCreateInput, WarehousesUncheckedCreateInput>
  }

  /**
   * Warehouses createMany
   */
  export type WarehousesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Warehouses.
     */
    data: WarehousesCreateManyInput | WarehousesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Warehouses createManyAndReturn
   */
  export type WarehousesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouses
     */
    select?: WarehousesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Warehouses
     */
    omit?: WarehousesOmit<ExtArgs> | null
    /**
     * The data used to create many Warehouses.
     */
    data: WarehousesCreateManyInput | WarehousesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Warehouses update
   */
  export type WarehousesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouses
     */
    select?: WarehousesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warehouses
     */
    omit?: WarehousesOmit<ExtArgs> | null
    /**
     * The data needed to update a Warehouses.
     */
    data: XOR<WarehousesUpdateInput, WarehousesUncheckedUpdateInput>
    /**
     * Choose, which Warehouses to update.
     */
    where: WarehousesWhereUniqueInput
  }

  /**
   * Warehouses updateMany
   */
  export type WarehousesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Warehouses.
     */
    data: XOR<WarehousesUpdateManyMutationInput, WarehousesUncheckedUpdateManyInput>
    /**
     * Filter which Warehouses to update
     */
    where?: WarehousesWhereInput
    /**
     * Limit how many Warehouses to update.
     */
    limit?: number
  }

  /**
   * Warehouses updateManyAndReturn
   */
  export type WarehousesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouses
     */
    select?: WarehousesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Warehouses
     */
    omit?: WarehousesOmit<ExtArgs> | null
    /**
     * The data used to update Warehouses.
     */
    data: XOR<WarehousesUpdateManyMutationInput, WarehousesUncheckedUpdateManyInput>
    /**
     * Filter which Warehouses to update
     */
    where?: WarehousesWhereInput
    /**
     * Limit how many Warehouses to update.
     */
    limit?: number
  }

  /**
   * Warehouses upsert
   */
  export type WarehousesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouses
     */
    select?: WarehousesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warehouses
     */
    omit?: WarehousesOmit<ExtArgs> | null
    /**
     * The filter to search for the Warehouses to update in case it exists.
     */
    where: WarehousesWhereUniqueInput
    /**
     * In case the Warehouses found by the `where` argument doesn't exist, create a new Warehouses with this data.
     */
    create: XOR<WarehousesCreateInput, WarehousesUncheckedCreateInput>
    /**
     * In case the Warehouses was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WarehousesUpdateInput, WarehousesUncheckedUpdateInput>
  }

  /**
   * Warehouses delete
   */
  export type WarehousesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouses
     */
    select?: WarehousesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warehouses
     */
    omit?: WarehousesOmit<ExtArgs> | null
    /**
     * Filter which Warehouses to delete.
     */
    where: WarehousesWhereUniqueInput
  }

  /**
   * Warehouses deleteMany
   */
  export type WarehousesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Warehouses to delete
     */
    where?: WarehousesWhereInput
    /**
     * Limit how many Warehouses to delete.
     */
    limit?: number
  }

  /**
   * Warehouses without action
   */
  export type WarehousesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouses
     */
    select?: WarehousesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warehouses
     */
    omit?: WarehousesOmit<ExtArgs> | null
  }


  /**
   * Model Products
   */

  export type AggregateProducts = {
    _count: ProductsCountAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  export type ProductsMinAggregateOutputType = {
    productId: string | null
    organizationId: string | null
    name: string | null
    sku: string | null
    barcode: string | null
    createdAt: Date | null
  }

  export type ProductsMaxAggregateOutputType = {
    productId: string | null
    organizationId: string | null
    name: string | null
    sku: string | null
    barcode: string | null
    createdAt: Date | null
  }

  export type ProductsCountAggregateOutputType = {
    productId: number
    organizationId: number
    name: number
    sku: number
    barcode: number
    createdAt: number
    _all: number
  }


  export type ProductsMinAggregateInputType = {
    productId?: true
    organizationId?: true
    name?: true
    sku?: true
    barcode?: true
    createdAt?: true
  }

  export type ProductsMaxAggregateInputType = {
    productId?: true
    organizationId?: true
    name?: true
    sku?: true
    barcode?: true
    createdAt?: true
  }

  export type ProductsCountAggregateInputType = {
    productId?: true
    organizationId?: true
    name?: true
    sku?: true
    barcode?: true
    createdAt?: true
    _all?: true
  }

  export type ProductsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to aggregate.
     */
    where?: ProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductsMaxAggregateInputType
  }

  export type GetProductsAggregateType<T extends ProductsAggregateArgs> = {
        [P in keyof T & keyof AggregateProducts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProducts[P]>
      : GetScalarType<T[P], AggregateProducts[P]>
  }




  export type ProductsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductsWhereInput
    orderBy?: ProductsOrderByWithAggregationInput | ProductsOrderByWithAggregationInput[]
    by: ProductsScalarFieldEnum[] | ProductsScalarFieldEnum
    having?: ProductsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductsCountAggregateInputType | true
    _min?: ProductsMinAggregateInputType
    _max?: ProductsMaxAggregateInputType
  }

  export type ProductsGroupByOutputType = {
    productId: string
    organizationId: string
    name: string
    sku: string
    barcode: string
    createdAt: Date
    _count: ProductsCountAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  type GetProductsGroupByPayload<T extends ProductsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductsGroupByOutputType[P]>
            : GetScalarType<T[P], ProductsGroupByOutputType[P]>
        }
      >
    >


  export type ProductsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    productId?: boolean
    organizationId?: boolean
    name?: boolean
    sku?: boolean
    barcode?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["products"]>

  export type ProductsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    productId?: boolean
    organizationId?: boolean
    name?: boolean
    sku?: boolean
    barcode?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["products"]>

  export type ProductsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    productId?: boolean
    organizationId?: boolean
    name?: boolean
    sku?: boolean
    barcode?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["products"]>

  export type ProductsSelectScalar = {
    productId?: boolean
    organizationId?: boolean
    name?: boolean
    sku?: boolean
    barcode?: boolean
    createdAt?: boolean
  }

  export type ProductsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"productId" | "organizationId" | "name" | "sku" | "barcode" | "createdAt", ExtArgs["result"]["products"]>

  export type $ProductsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Products"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      productId: string
      organizationId: string
      name: string
      sku: string
      barcode: string
      createdAt: Date
    }, ExtArgs["result"]["products"]>
    composites: {}
  }

  type ProductsGetPayload<S extends boolean | null | undefined | ProductsDefaultArgs> = $Result.GetResult<Prisma.$ProductsPayload, S>

  type ProductsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductsCountAggregateInputType | true
    }

  export interface ProductsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Products'], meta: { name: 'Products' } }
    /**
     * Find zero or one Products that matches the filter.
     * @param {ProductsFindUniqueArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductsFindUniqueArgs>(args: SelectSubset<T, ProductsFindUniqueArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Products that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductsFindUniqueOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductsFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsFindFirstArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductsFindFirstArgs>(args?: SelectSubset<T, ProductsFindFirstArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Products that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsFindFirstOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductsFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.products.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.products.findMany({ take: 10 })
     * 
     * // Only select the `productId`
     * const productsWithProductIdOnly = await prisma.products.findMany({ select: { productId: true } })
     * 
     */
    findMany<T extends ProductsFindManyArgs>(args?: SelectSubset<T, ProductsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Products.
     * @param {ProductsCreateArgs} args - Arguments to create a Products.
     * @example
     * // Create one Products
     * const Products = await prisma.products.create({
     *   data: {
     *     // ... data to create a Products
     *   }
     * })
     * 
     */
    create<T extends ProductsCreateArgs>(args: SelectSubset<T, ProductsCreateArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductsCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const products = await prisma.products.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductsCreateManyArgs>(args?: SelectSubset<T, ProductsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductsCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const products = await prisma.products.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `productId`
     * const productsWithProductIdOnly = await prisma.products.createManyAndReturn({
     *   select: { productId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductsCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Products.
     * @param {ProductsDeleteArgs} args - Arguments to delete one Products.
     * @example
     * // Delete one Products
     * const Products = await prisma.products.delete({
     *   where: {
     *     // ... filter to delete one Products
     *   }
     * })
     * 
     */
    delete<T extends ProductsDeleteArgs>(args: SelectSubset<T, ProductsDeleteArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Products.
     * @param {ProductsUpdateArgs} args - Arguments to update one Products.
     * @example
     * // Update one Products
     * const products = await prisma.products.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductsUpdateArgs>(args: SelectSubset<T, ProductsUpdateArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductsDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.products.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductsDeleteManyArgs>(args?: SelectSubset<T, ProductsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const products = await prisma.products.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductsUpdateManyArgs>(args: SelectSubset<T, ProductsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {ProductsUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const products = await prisma.products.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `productId`
     * const productsWithProductIdOnly = await prisma.products.updateManyAndReturn({
     *   select: { productId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductsUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Products.
     * @param {ProductsUpsertArgs} args - Arguments to update or create a Products.
     * @example
     * // Update or create a Products
     * const products = await prisma.products.upsert({
     *   create: {
     *     // ... data to create a Products
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Products we want to update
     *   }
     * })
     */
    upsert<T extends ProductsUpsertArgs>(args: SelectSubset<T, ProductsUpsertArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.products.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductsCountArgs>(
      args?: Subset<T, ProductsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductsAggregateArgs>(args: Subset<T, ProductsAggregateArgs>): Prisma.PrismaPromise<GetProductsAggregateType<T>>

    /**
     * Group by Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductsGroupByArgs['orderBy'] }
        : { orderBy?: ProductsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Products model
   */
  readonly fields: ProductsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Products.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Products model
   */
  interface ProductsFieldRefs {
    readonly productId: FieldRef<"Products", 'String'>
    readonly organizationId: FieldRef<"Products", 'String'>
    readonly name: FieldRef<"Products", 'String'>
    readonly sku: FieldRef<"Products", 'String'>
    readonly barcode: FieldRef<"Products", 'String'>
    readonly createdAt: FieldRef<"Products", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Products findUnique
   */
  export type ProductsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where: ProductsWhereUniqueInput
  }

  /**
   * Products findUniqueOrThrow
   */
  export type ProductsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where: ProductsWhereUniqueInput
  }

  /**
   * Products findFirst
   */
  export type ProductsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * Products findFirstOrThrow
   */
  export type ProductsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * Products findMany
   */
  export type ProductsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * Products create
   */
  export type ProductsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * The data needed to create a Products.
     */
    data: XOR<ProductsCreateInput, ProductsUncheckedCreateInput>
  }

  /**
   * Products createMany
   */
  export type ProductsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductsCreateManyInput | ProductsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Products createManyAndReturn
   */
  export type ProductsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductsCreateManyInput | ProductsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Products update
   */
  export type ProductsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * The data needed to update a Products.
     */
    data: XOR<ProductsUpdateInput, ProductsUncheckedUpdateInput>
    /**
     * Choose, which Products to update.
     */
    where: ProductsWhereUniqueInput
  }

  /**
   * Products updateMany
   */
  export type ProductsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductsUpdateManyMutationInput, ProductsUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductsWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Products updateManyAndReturn
   */
  export type ProductsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * The data used to update Products.
     */
    data: XOR<ProductsUpdateManyMutationInput, ProductsUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductsWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Products upsert
   */
  export type ProductsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * The filter to search for the Products to update in case it exists.
     */
    where: ProductsWhereUniqueInput
    /**
     * In case the Products found by the `where` argument doesn't exist, create a new Products with this data.
     */
    create: XOR<ProductsCreateInput, ProductsUncheckedCreateInput>
    /**
     * In case the Products was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductsUpdateInput, ProductsUncheckedUpdateInput>
  }

  /**
   * Products delete
   */
  export type ProductsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Filter which Products to delete.
     */
    where: ProductsWhereUniqueInput
  }

  /**
   * Products deleteMany
   */
  export type ProductsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductsWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Products without action
   */
  export type ProductsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
  }


  /**
   * Model Nomenclature_Category
   */

  export type AggregateNomenclature_Category = {
    _count: Nomenclature_CategoryCountAggregateOutputType | null
    _min: Nomenclature_CategoryMinAggregateOutputType | null
    _max: Nomenclature_CategoryMaxAggregateOutputType | null
  }

  export type Nomenclature_CategoryMinAggregateOutputType = {
    categoryId: string | null
    name: string | null
  }

  export type Nomenclature_CategoryMaxAggregateOutputType = {
    categoryId: string | null
    name: string | null
  }

  export type Nomenclature_CategoryCountAggregateOutputType = {
    categoryId: number
    name: number
    _all: number
  }


  export type Nomenclature_CategoryMinAggregateInputType = {
    categoryId?: true
    name?: true
  }

  export type Nomenclature_CategoryMaxAggregateInputType = {
    categoryId?: true
    name?: true
  }

  export type Nomenclature_CategoryCountAggregateInputType = {
    categoryId?: true
    name?: true
    _all?: true
  }

  export type Nomenclature_CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Nomenclature_Category to aggregate.
     */
    where?: Nomenclature_CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Nomenclature_Categories to fetch.
     */
    orderBy?: Nomenclature_CategoryOrderByWithRelationInput | Nomenclature_CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Nomenclature_CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Nomenclature_Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Nomenclature_Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Nomenclature_Categories
    **/
    _count?: true | Nomenclature_CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Nomenclature_CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Nomenclature_CategoryMaxAggregateInputType
  }

  export type GetNomenclature_CategoryAggregateType<T extends Nomenclature_CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateNomenclature_Category]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNomenclature_Category[P]>
      : GetScalarType<T[P], AggregateNomenclature_Category[P]>
  }




  export type Nomenclature_CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Nomenclature_CategoryWhereInput
    orderBy?: Nomenclature_CategoryOrderByWithAggregationInput | Nomenclature_CategoryOrderByWithAggregationInput[]
    by: Nomenclature_CategoryScalarFieldEnum[] | Nomenclature_CategoryScalarFieldEnum
    having?: Nomenclature_CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Nomenclature_CategoryCountAggregateInputType | true
    _min?: Nomenclature_CategoryMinAggregateInputType
    _max?: Nomenclature_CategoryMaxAggregateInputType
  }

  export type Nomenclature_CategoryGroupByOutputType = {
    categoryId: string
    name: string
    _count: Nomenclature_CategoryCountAggregateOutputType | null
    _min: Nomenclature_CategoryMinAggregateOutputType | null
    _max: Nomenclature_CategoryMaxAggregateOutputType | null
  }

  type GetNomenclature_CategoryGroupByPayload<T extends Nomenclature_CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Nomenclature_CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Nomenclature_CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Nomenclature_CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], Nomenclature_CategoryGroupByOutputType[P]>
        }
      >
    >


  export type Nomenclature_CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    categoryId?: boolean
    name?: boolean
  }, ExtArgs["result"]["nomenclature_Category"]>

  export type Nomenclature_CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    categoryId?: boolean
    name?: boolean
  }, ExtArgs["result"]["nomenclature_Category"]>

  export type Nomenclature_CategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    categoryId?: boolean
    name?: boolean
  }, ExtArgs["result"]["nomenclature_Category"]>

  export type Nomenclature_CategorySelectScalar = {
    categoryId?: boolean
    name?: boolean
  }

  export type Nomenclature_CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"categoryId" | "name", ExtArgs["result"]["nomenclature_Category"]>

  export type $Nomenclature_CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Nomenclature_Category"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      categoryId: string
      name: string
    }, ExtArgs["result"]["nomenclature_Category"]>
    composites: {}
  }

  type Nomenclature_CategoryGetPayload<S extends boolean | null | undefined | Nomenclature_CategoryDefaultArgs> = $Result.GetResult<Prisma.$Nomenclature_CategoryPayload, S>

  type Nomenclature_CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Nomenclature_CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Nomenclature_CategoryCountAggregateInputType | true
    }

  export interface Nomenclature_CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Nomenclature_Category'], meta: { name: 'Nomenclature_Category' } }
    /**
     * Find zero or one Nomenclature_Category that matches the filter.
     * @param {Nomenclature_CategoryFindUniqueArgs} args - Arguments to find a Nomenclature_Category
     * @example
     * // Get one Nomenclature_Category
     * const nomenclature_Category = await prisma.nomenclature_Category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Nomenclature_CategoryFindUniqueArgs>(args: SelectSubset<T, Nomenclature_CategoryFindUniqueArgs<ExtArgs>>): Prisma__Nomenclature_CategoryClient<$Result.GetResult<Prisma.$Nomenclature_CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Nomenclature_Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Nomenclature_CategoryFindUniqueOrThrowArgs} args - Arguments to find a Nomenclature_Category
     * @example
     * // Get one Nomenclature_Category
     * const nomenclature_Category = await prisma.nomenclature_Category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Nomenclature_CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, Nomenclature_CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Nomenclature_CategoryClient<$Result.GetResult<Prisma.$Nomenclature_CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Nomenclature_Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Nomenclature_CategoryFindFirstArgs} args - Arguments to find a Nomenclature_Category
     * @example
     * // Get one Nomenclature_Category
     * const nomenclature_Category = await prisma.nomenclature_Category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Nomenclature_CategoryFindFirstArgs>(args?: SelectSubset<T, Nomenclature_CategoryFindFirstArgs<ExtArgs>>): Prisma__Nomenclature_CategoryClient<$Result.GetResult<Prisma.$Nomenclature_CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Nomenclature_Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Nomenclature_CategoryFindFirstOrThrowArgs} args - Arguments to find a Nomenclature_Category
     * @example
     * // Get one Nomenclature_Category
     * const nomenclature_Category = await prisma.nomenclature_Category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Nomenclature_CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, Nomenclature_CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__Nomenclature_CategoryClient<$Result.GetResult<Prisma.$Nomenclature_CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Nomenclature_Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Nomenclature_CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Nomenclature_Categories
     * const nomenclature_Categories = await prisma.nomenclature_Category.findMany()
     * 
     * // Get first 10 Nomenclature_Categories
     * const nomenclature_Categories = await prisma.nomenclature_Category.findMany({ take: 10 })
     * 
     * // Only select the `categoryId`
     * const nomenclature_CategoryWithCategoryIdOnly = await prisma.nomenclature_Category.findMany({ select: { categoryId: true } })
     * 
     */
    findMany<T extends Nomenclature_CategoryFindManyArgs>(args?: SelectSubset<T, Nomenclature_CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Nomenclature_CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Nomenclature_Category.
     * @param {Nomenclature_CategoryCreateArgs} args - Arguments to create a Nomenclature_Category.
     * @example
     * // Create one Nomenclature_Category
     * const Nomenclature_Category = await prisma.nomenclature_Category.create({
     *   data: {
     *     // ... data to create a Nomenclature_Category
     *   }
     * })
     * 
     */
    create<T extends Nomenclature_CategoryCreateArgs>(args: SelectSubset<T, Nomenclature_CategoryCreateArgs<ExtArgs>>): Prisma__Nomenclature_CategoryClient<$Result.GetResult<Prisma.$Nomenclature_CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Nomenclature_Categories.
     * @param {Nomenclature_CategoryCreateManyArgs} args - Arguments to create many Nomenclature_Categories.
     * @example
     * // Create many Nomenclature_Categories
     * const nomenclature_Category = await prisma.nomenclature_Category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Nomenclature_CategoryCreateManyArgs>(args?: SelectSubset<T, Nomenclature_CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Nomenclature_Categories and returns the data saved in the database.
     * @param {Nomenclature_CategoryCreateManyAndReturnArgs} args - Arguments to create many Nomenclature_Categories.
     * @example
     * // Create many Nomenclature_Categories
     * const nomenclature_Category = await prisma.nomenclature_Category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Nomenclature_Categories and only return the `categoryId`
     * const nomenclature_CategoryWithCategoryIdOnly = await prisma.nomenclature_Category.createManyAndReturn({
     *   select: { categoryId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Nomenclature_CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, Nomenclature_CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Nomenclature_CategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Nomenclature_Category.
     * @param {Nomenclature_CategoryDeleteArgs} args - Arguments to delete one Nomenclature_Category.
     * @example
     * // Delete one Nomenclature_Category
     * const Nomenclature_Category = await prisma.nomenclature_Category.delete({
     *   where: {
     *     // ... filter to delete one Nomenclature_Category
     *   }
     * })
     * 
     */
    delete<T extends Nomenclature_CategoryDeleteArgs>(args: SelectSubset<T, Nomenclature_CategoryDeleteArgs<ExtArgs>>): Prisma__Nomenclature_CategoryClient<$Result.GetResult<Prisma.$Nomenclature_CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Nomenclature_Category.
     * @param {Nomenclature_CategoryUpdateArgs} args - Arguments to update one Nomenclature_Category.
     * @example
     * // Update one Nomenclature_Category
     * const nomenclature_Category = await prisma.nomenclature_Category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Nomenclature_CategoryUpdateArgs>(args: SelectSubset<T, Nomenclature_CategoryUpdateArgs<ExtArgs>>): Prisma__Nomenclature_CategoryClient<$Result.GetResult<Prisma.$Nomenclature_CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Nomenclature_Categories.
     * @param {Nomenclature_CategoryDeleteManyArgs} args - Arguments to filter Nomenclature_Categories to delete.
     * @example
     * // Delete a few Nomenclature_Categories
     * const { count } = await prisma.nomenclature_Category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Nomenclature_CategoryDeleteManyArgs>(args?: SelectSubset<T, Nomenclature_CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Nomenclature_Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Nomenclature_CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Nomenclature_Categories
     * const nomenclature_Category = await prisma.nomenclature_Category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Nomenclature_CategoryUpdateManyArgs>(args: SelectSubset<T, Nomenclature_CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Nomenclature_Categories and returns the data updated in the database.
     * @param {Nomenclature_CategoryUpdateManyAndReturnArgs} args - Arguments to update many Nomenclature_Categories.
     * @example
     * // Update many Nomenclature_Categories
     * const nomenclature_Category = await prisma.nomenclature_Category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Nomenclature_Categories and only return the `categoryId`
     * const nomenclature_CategoryWithCategoryIdOnly = await prisma.nomenclature_Category.updateManyAndReturn({
     *   select: { categoryId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends Nomenclature_CategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, Nomenclature_CategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Nomenclature_CategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Nomenclature_Category.
     * @param {Nomenclature_CategoryUpsertArgs} args - Arguments to update or create a Nomenclature_Category.
     * @example
     * // Update or create a Nomenclature_Category
     * const nomenclature_Category = await prisma.nomenclature_Category.upsert({
     *   create: {
     *     // ... data to create a Nomenclature_Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Nomenclature_Category we want to update
     *   }
     * })
     */
    upsert<T extends Nomenclature_CategoryUpsertArgs>(args: SelectSubset<T, Nomenclature_CategoryUpsertArgs<ExtArgs>>): Prisma__Nomenclature_CategoryClient<$Result.GetResult<Prisma.$Nomenclature_CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Nomenclature_Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Nomenclature_CategoryCountArgs} args - Arguments to filter Nomenclature_Categories to count.
     * @example
     * // Count the number of Nomenclature_Categories
     * const count = await prisma.nomenclature_Category.count({
     *   where: {
     *     // ... the filter for the Nomenclature_Categories we want to count
     *   }
     * })
    **/
    count<T extends Nomenclature_CategoryCountArgs>(
      args?: Subset<T, Nomenclature_CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Nomenclature_CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Nomenclature_Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Nomenclature_CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Nomenclature_CategoryAggregateArgs>(args: Subset<T, Nomenclature_CategoryAggregateArgs>): Prisma.PrismaPromise<GetNomenclature_CategoryAggregateType<T>>

    /**
     * Group by Nomenclature_Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Nomenclature_CategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Nomenclature_CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Nomenclature_CategoryGroupByArgs['orderBy'] }
        : { orderBy?: Nomenclature_CategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Nomenclature_CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNomenclature_CategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Nomenclature_Category model
   */
  readonly fields: Nomenclature_CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Nomenclature_Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Nomenclature_CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Nomenclature_Category model
   */
  interface Nomenclature_CategoryFieldRefs {
    readonly categoryId: FieldRef<"Nomenclature_Category", 'String'>
    readonly name: FieldRef<"Nomenclature_Category", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Nomenclature_Category findUnique
   */
  export type Nomenclature_CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nomenclature_Category
     */
    select?: Nomenclature_CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nomenclature_Category
     */
    omit?: Nomenclature_CategoryOmit<ExtArgs> | null
    /**
     * Filter, which Nomenclature_Category to fetch.
     */
    where: Nomenclature_CategoryWhereUniqueInput
  }

  /**
   * Nomenclature_Category findUniqueOrThrow
   */
  export type Nomenclature_CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nomenclature_Category
     */
    select?: Nomenclature_CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nomenclature_Category
     */
    omit?: Nomenclature_CategoryOmit<ExtArgs> | null
    /**
     * Filter, which Nomenclature_Category to fetch.
     */
    where: Nomenclature_CategoryWhereUniqueInput
  }

  /**
   * Nomenclature_Category findFirst
   */
  export type Nomenclature_CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nomenclature_Category
     */
    select?: Nomenclature_CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nomenclature_Category
     */
    omit?: Nomenclature_CategoryOmit<ExtArgs> | null
    /**
     * Filter, which Nomenclature_Category to fetch.
     */
    where?: Nomenclature_CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Nomenclature_Categories to fetch.
     */
    orderBy?: Nomenclature_CategoryOrderByWithRelationInput | Nomenclature_CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Nomenclature_Categories.
     */
    cursor?: Nomenclature_CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Nomenclature_Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Nomenclature_Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Nomenclature_Categories.
     */
    distinct?: Nomenclature_CategoryScalarFieldEnum | Nomenclature_CategoryScalarFieldEnum[]
  }

  /**
   * Nomenclature_Category findFirstOrThrow
   */
  export type Nomenclature_CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nomenclature_Category
     */
    select?: Nomenclature_CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nomenclature_Category
     */
    omit?: Nomenclature_CategoryOmit<ExtArgs> | null
    /**
     * Filter, which Nomenclature_Category to fetch.
     */
    where?: Nomenclature_CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Nomenclature_Categories to fetch.
     */
    orderBy?: Nomenclature_CategoryOrderByWithRelationInput | Nomenclature_CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Nomenclature_Categories.
     */
    cursor?: Nomenclature_CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Nomenclature_Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Nomenclature_Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Nomenclature_Categories.
     */
    distinct?: Nomenclature_CategoryScalarFieldEnum | Nomenclature_CategoryScalarFieldEnum[]
  }

  /**
   * Nomenclature_Category findMany
   */
  export type Nomenclature_CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nomenclature_Category
     */
    select?: Nomenclature_CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nomenclature_Category
     */
    omit?: Nomenclature_CategoryOmit<ExtArgs> | null
    /**
     * Filter, which Nomenclature_Categories to fetch.
     */
    where?: Nomenclature_CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Nomenclature_Categories to fetch.
     */
    orderBy?: Nomenclature_CategoryOrderByWithRelationInput | Nomenclature_CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Nomenclature_Categories.
     */
    cursor?: Nomenclature_CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Nomenclature_Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Nomenclature_Categories.
     */
    skip?: number
    distinct?: Nomenclature_CategoryScalarFieldEnum | Nomenclature_CategoryScalarFieldEnum[]
  }

  /**
   * Nomenclature_Category create
   */
  export type Nomenclature_CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nomenclature_Category
     */
    select?: Nomenclature_CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nomenclature_Category
     */
    omit?: Nomenclature_CategoryOmit<ExtArgs> | null
    /**
     * The data needed to create a Nomenclature_Category.
     */
    data: XOR<Nomenclature_CategoryCreateInput, Nomenclature_CategoryUncheckedCreateInput>
  }

  /**
   * Nomenclature_Category createMany
   */
  export type Nomenclature_CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Nomenclature_Categories.
     */
    data: Nomenclature_CategoryCreateManyInput | Nomenclature_CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Nomenclature_Category createManyAndReturn
   */
  export type Nomenclature_CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nomenclature_Category
     */
    select?: Nomenclature_CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Nomenclature_Category
     */
    omit?: Nomenclature_CategoryOmit<ExtArgs> | null
    /**
     * The data used to create many Nomenclature_Categories.
     */
    data: Nomenclature_CategoryCreateManyInput | Nomenclature_CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Nomenclature_Category update
   */
  export type Nomenclature_CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nomenclature_Category
     */
    select?: Nomenclature_CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nomenclature_Category
     */
    omit?: Nomenclature_CategoryOmit<ExtArgs> | null
    /**
     * The data needed to update a Nomenclature_Category.
     */
    data: XOR<Nomenclature_CategoryUpdateInput, Nomenclature_CategoryUncheckedUpdateInput>
    /**
     * Choose, which Nomenclature_Category to update.
     */
    where: Nomenclature_CategoryWhereUniqueInput
  }

  /**
   * Nomenclature_Category updateMany
   */
  export type Nomenclature_CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Nomenclature_Categories.
     */
    data: XOR<Nomenclature_CategoryUpdateManyMutationInput, Nomenclature_CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Nomenclature_Categories to update
     */
    where?: Nomenclature_CategoryWhereInput
    /**
     * Limit how many Nomenclature_Categories to update.
     */
    limit?: number
  }

  /**
   * Nomenclature_Category updateManyAndReturn
   */
  export type Nomenclature_CategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nomenclature_Category
     */
    select?: Nomenclature_CategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Nomenclature_Category
     */
    omit?: Nomenclature_CategoryOmit<ExtArgs> | null
    /**
     * The data used to update Nomenclature_Categories.
     */
    data: XOR<Nomenclature_CategoryUpdateManyMutationInput, Nomenclature_CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Nomenclature_Categories to update
     */
    where?: Nomenclature_CategoryWhereInput
    /**
     * Limit how many Nomenclature_Categories to update.
     */
    limit?: number
  }

  /**
   * Nomenclature_Category upsert
   */
  export type Nomenclature_CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nomenclature_Category
     */
    select?: Nomenclature_CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nomenclature_Category
     */
    omit?: Nomenclature_CategoryOmit<ExtArgs> | null
    /**
     * The filter to search for the Nomenclature_Category to update in case it exists.
     */
    where: Nomenclature_CategoryWhereUniqueInput
    /**
     * In case the Nomenclature_Category found by the `where` argument doesn't exist, create a new Nomenclature_Category with this data.
     */
    create: XOR<Nomenclature_CategoryCreateInput, Nomenclature_CategoryUncheckedCreateInput>
    /**
     * In case the Nomenclature_Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Nomenclature_CategoryUpdateInput, Nomenclature_CategoryUncheckedUpdateInput>
  }

  /**
   * Nomenclature_Category delete
   */
  export type Nomenclature_CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nomenclature_Category
     */
    select?: Nomenclature_CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nomenclature_Category
     */
    omit?: Nomenclature_CategoryOmit<ExtArgs> | null
    /**
     * Filter which Nomenclature_Category to delete.
     */
    where: Nomenclature_CategoryWhereUniqueInput
  }

  /**
   * Nomenclature_Category deleteMany
   */
  export type Nomenclature_CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Nomenclature_Categories to delete
     */
    where?: Nomenclature_CategoryWhereInput
    /**
     * Limit how many Nomenclature_Categories to delete.
     */
    limit?: number
  }

  /**
   * Nomenclature_Category without action
   */
  export type Nomenclature_CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nomenclature_Category
     */
    select?: Nomenclature_CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nomenclature_Category
     */
    omit?: Nomenclature_CategoryOmit<ExtArgs> | null
  }


  /**
   * Model Nomenklatury
   */

  export type AggregateNomenklatury = {
    _count: NomenklaturyCountAggregateOutputType | null
    _avg: NomenklaturyAvgAggregateOutputType | null
    _sum: NomenklaturySumAggregateOutputType | null
    _min: NomenklaturyMinAggregateOutputType | null
    _max: NomenklaturyMaxAggregateOutputType | null
  }

  export type NomenklaturyAvgAggregateOutputType = {
    categoryId: number | null
  }

  export type NomenklaturySumAggregateOutputType = {
    categoryId: number | null
  }

  export type NomenklaturyMinAggregateOutputType = {
    nomenclatureId: string | null
    categoryId: number | null
    name: string | null
  }

  export type NomenklaturyMaxAggregateOutputType = {
    nomenclatureId: string | null
    categoryId: number | null
    name: string | null
  }

  export type NomenklaturyCountAggregateOutputType = {
    nomenclatureId: number
    categoryId: number
    name: number
    _all: number
  }


  export type NomenklaturyAvgAggregateInputType = {
    categoryId?: true
  }

  export type NomenklaturySumAggregateInputType = {
    categoryId?: true
  }

  export type NomenklaturyMinAggregateInputType = {
    nomenclatureId?: true
    categoryId?: true
    name?: true
  }

  export type NomenklaturyMaxAggregateInputType = {
    nomenclatureId?: true
    categoryId?: true
    name?: true
  }

  export type NomenklaturyCountAggregateInputType = {
    nomenclatureId?: true
    categoryId?: true
    name?: true
    _all?: true
  }

  export type NomenklaturyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Nomenklatury to aggregate.
     */
    where?: NomenklaturyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Nomenklaturies to fetch.
     */
    orderBy?: NomenklaturyOrderByWithRelationInput | NomenklaturyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NomenklaturyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Nomenklaturies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Nomenklaturies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Nomenklaturies
    **/
    _count?: true | NomenklaturyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NomenklaturyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NomenklaturySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NomenklaturyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NomenklaturyMaxAggregateInputType
  }

  export type GetNomenklaturyAggregateType<T extends NomenklaturyAggregateArgs> = {
        [P in keyof T & keyof AggregateNomenklatury]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNomenklatury[P]>
      : GetScalarType<T[P], AggregateNomenklatury[P]>
  }




  export type NomenklaturyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NomenklaturyWhereInput
    orderBy?: NomenklaturyOrderByWithAggregationInput | NomenklaturyOrderByWithAggregationInput[]
    by: NomenklaturyScalarFieldEnum[] | NomenklaturyScalarFieldEnum
    having?: NomenklaturyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NomenklaturyCountAggregateInputType | true
    _avg?: NomenklaturyAvgAggregateInputType
    _sum?: NomenklaturySumAggregateInputType
    _min?: NomenklaturyMinAggregateInputType
    _max?: NomenklaturyMaxAggregateInputType
  }

  export type NomenklaturyGroupByOutputType = {
    nomenclatureId: string
    categoryId: number
    name: string
    _count: NomenklaturyCountAggregateOutputType | null
    _avg: NomenklaturyAvgAggregateOutputType | null
    _sum: NomenklaturySumAggregateOutputType | null
    _min: NomenklaturyMinAggregateOutputType | null
    _max: NomenklaturyMaxAggregateOutputType | null
  }

  type GetNomenklaturyGroupByPayload<T extends NomenklaturyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NomenklaturyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NomenklaturyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NomenklaturyGroupByOutputType[P]>
            : GetScalarType<T[P], NomenklaturyGroupByOutputType[P]>
        }
      >
    >


  export type NomenklaturySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nomenclatureId?: boolean
    categoryId?: boolean
    name?: boolean
  }, ExtArgs["result"]["nomenklatury"]>

  export type NomenklaturySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nomenclatureId?: boolean
    categoryId?: boolean
    name?: boolean
  }, ExtArgs["result"]["nomenklatury"]>

  export type NomenklaturySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nomenclatureId?: boolean
    categoryId?: boolean
    name?: boolean
  }, ExtArgs["result"]["nomenklatury"]>

  export type NomenklaturySelectScalar = {
    nomenclatureId?: boolean
    categoryId?: boolean
    name?: boolean
  }

  export type NomenklaturyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"nomenclatureId" | "categoryId" | "name", ExtArgs["result"]["nomenklatury"]>

  export type $NomenklaturyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Nomenklatury"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      nomenclatureId: string
      categoryId: number
      name: string
    }, ExtArgs["result"]["nomenklatury"]>
    composites: {}
  }

  type NomenklaturyGetPayload<S extends boolean | null | undefined | NomenklaturyDefaultArgs> = $Result.GetResult<Prisma.$NomenklaturyPayload, S>

  type NomenklaturyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NomenklaturyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NomenklaturyCountAggregateInputType | true
    }

  export interface NomenklaturyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Nomenklatury'], meta: { name: 'Nomenklatury' } }
    /**
     * Find zero or one Nomenklatury that matches the filter.
     * @param {NomenklaturyFindUniqueArgs} args - Arguments to find a Nomenklatury
     * @example
     * // Get one Nomenklatury
     * const nomenklatury = await prisma.nomenklatury.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NomenklaturyFindUniqueArgs>(args: SelectSubset<T, NomenklaturyFindUniqueArgs<ExtArgs>>): Prisma__NomenklaturyClient<$Result.GetResult<Prisma.$NomenklaturyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Nomenklatury that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NomenklaturyFindUniqueOrThrowArgs} args - Arguments to find a Nomenklatury
     * @example
     * // Get one Nomenklatury
     * const nomenklatury = await prisma.nomenklatury.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NomenklaturyFindUniqueOrThrowArgs>(args: SelectSubset<T, NomenklaturyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NomenklaturyClient<$Result.GetResult<Prisma.$NomenklaturyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Nomenklatury that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NomenklaturyFindFirstArgs} args - Arguments to find a Nomenklatury
     * @example
     * // Get one Nomenklatury
     * const nomenklatury = await prisma.nomenklatury.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NomenklaturyFindFirstArgs>(args?: SelectSubset<T, NomenklaturyFindFirstArgs<ExtArgs>>): Prisma__NomenklaturyClient<$Result.GetResult<Prisma.$NomenklaturyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Nomenklatury that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NomenklaturyFindFirstOrThrowArgs} args - Arguments to find a Nomenklatury
     * @example
     * // Get one Nomenklatury
     * const nomenklatury = await prisma.nomenklatury.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NomenklaturyFindFirstOrThrowArgs>(args?: SelectSubset<T, NomenklaturyFindFirstOrThrowArgs<ExtArgs>>): Prisma__NomenklaturyClient<$Result.GetResult<Prisma.$NomenklaturyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Nomenklaturies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NomenklaturyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Nomenklaturies
     * const nomenklaturies = await prisma.nomenklatury.findMany()
     * 
     * // Get first 10 Nomenklaturies
     * const nomenklaturies = await prisma.nomenklatury.findMany({ take: 10 })
     * 
     * // Only select the `nomenclatureId`
     * const nomenklaturyWithNomenclatureIdOnly = await prisma.nomenklatury.findMany({ select: { nomenclatureId: true } })
     * 
     */
    findMany<T extends NomenklaturyFindManyArgs>(args?: SelectSubset<T, NomenklaturyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NomenklaturyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Nomenklatury.
     * @param {NomenklaturyCreateArgs} args - Arguments to create a Nomenklatury.
     * @example
     * // Create one Nomenklatury
     * const Nomenklatury = await prisma.nomenklatury.create({
     *   data: {
     *     // ... data to create a Nomenklatury
     *   }
     * })
     * 
     */
    create<T extends NomenklaturyCreateArgs>(args: SelectSubset<T, NomenklaturyCreateArgs<ExtArgs>>): Prisma__NomenklaturyClient<$Result.GetResult<Prisma.$NomenklaturyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Nomenklaturies.
     * @param {NomenklaturyCreateManyArgs} args - Arguments to create many Nomenklaturies.
     * @example
     * // Create many Nomenklaturies
     * const nomenklatury = await prisma.nomenklatury.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NomenklaturyCreateManyArgs>(args?: SelectSubset<T, NomenklaturyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Nomenklaturies and returns the data saved in the database.
     * @param {NomenklaturyCreateManyAndReturnArgs} args - Arguments to create many Nomenklaturies.
     * @example
     * // Create many Nomenklaturies
     * const nomenklatury = await prisma.nomenklatury.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Nomenklaturies and only return the `nomenclatureId`
     * const nomenklaturyWithNomenclatureIdOnly = await prisma.nomenklatury.createManyAndReturn({
     *   select: { nomenclatureId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NomenklaturyCreateManyAndReturnArgs>(args?: SelectSubset<T, NomenklaturyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NomenklaturyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Nomenklatury.
     * @param {NomenklaturyDeleteArgs} args - Arguments to delete one Nomenklatury.
     * @example
     * // Delete one Nomenklatury
     * const Nomenklatury = await prisma.nomenklatury.delete({
     *   where: {
     *     // ... filter to delete one Nomenklatury
     *   }
     * })
     * 
     */
    delete<T extends NomenklaturyDeleteArgs>(args: SelectSubset<T, NomenklaturyDeleteArgs<ExtArgs>>): Prisma__NomenklaturyClient<$Result.GetResult<Prisma.$NomenklaturyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Nomenklatury.
     * @param {NomenklaturyUpdateArgs} args - Arguments to update one Nomenklatury.
     * @example
     * // Update one Nomenklatury
     * const nomenklatury = await prisma.nomenklatury.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NomenklaturyUpdateArgs>(args: SelectSubset<T, NomenklaturyUpdateArgs<ExtArgs>>): Prisma__NomenklaturyClient<$Result.GetResult<Prisma.$NomenklaturyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Nomenklaturies.
     * @param {NomenklaturyDeleteManyArgs} args - Arguments to filter Nomenklaturies to delete.
     * @example
     * // Delete a few Nomenklaturies
     * const { count } = await prisma.nomenklatury.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NomenklaturyDeleteManyArgs>(args?: SelectSubset<T, NomenklaturyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Nomenklaturies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NomenklaturyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Nomenklaturies
     * const nomenklatury = await prisma.nomenklatury.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NomenklaturyUpdateManyArgs>(args: SelectSubset<T, NomenklaturyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Nomenklaturies and returns the data updated in the database.
     * @param {NomenklaturyUpdateManyAndReturnArgs} args - Arguments to update many Nomenklaturies.
     * @example
     * // Update many Nomenklaturies
     * const nomenklatury = await prisma.nomenklatury.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Nomenklaturies and only return the `nomenclatureId`
     * const nomenklaturyWithNomenclatureIdOnly = await prisma.nomenklatury.updateManyAndReturn({
     *   select: { nomenclatureId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NomenklaturyUpdateManyAndReturnArgs>(args: SelectSubset<T, NomenklaturyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NomenklaturyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Nomenklatury.
     * @param {NomenklaturyUpsertArgs} args - Arguments to update or create a Nomenklatury.
     * @example
     * // Update or create a Nomenklatury
     * const nomenklatury = await prisma.nomenklatury.upsert({
     *   create: {
     *     // ... data to create a Nomenklatury
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Nomenklatury we want to update
     *   }
     * })
     */
    upsert<T extends NomenklaturyUpsertArgs>(args: SelectSubset<T, NomenklaturyUpsertArgs<ExtArgs>>): Prisma__NomenklaturyClient<$Result.GetResult<Prisma.$NomenklaturyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Nomenklaturies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NomenklaturyCountArgs} args - Arguments to filter Nomenklaturies to count.
     * @example
     * // Count the number of Nomenklaturies
     * const count = await prisma.nomenklatury.count({
     *   where: {
     *     // ... the filter for the Nomenklaturies we want to count
     *   }
     * })
    **/
    count<T extends NomenklaturyCountArgs>(
      args?: Subset<T, NomenklaturyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NomenklaturyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Nomenklatury.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NomenklaturyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NomenklaturyAggregateArgs>(args: Subset<T, NomenklaturyAggregateArgs>): Prisma.PrismaPromise<GetNomenklaturyAggregateType<T>>

    /**
     * Group by Nomenklatury.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NomenklaturyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NomenklaturyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NomenklaturyGroupByArgs['orderBy'] }
        : { orderBy?: NomenklaturyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NomenklaturyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNomenklaturyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Nomenklatury model
   */
  readonly fields: NomenklaturyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Nomenklatury.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NomenklaturyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Nomenklatury model
   */
  interface NomenklaturyFieldRefs {
    readonly nomenclatureId: FieldRef<"Nomenklatury", 'String'>
    readonly categoryId: FieldRef<"Nomenklatury", 'Int'>
    readonly name: FieldRef<"Nomenklatury", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Nomenklatury findUnique
   */
  export type NomenklaturyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nomenklatury
     */
    select?: NomenklaturySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nomenklatury
     */
    omit?: NomenklaturyOmit<ExtArgs> | null
    /**
     * Filter, which Nomenklatury to fetch.
     */
    where: NomenklaturyWhereUniqueInput
  }

  /**
   * Nomenklatury findUniqueOrThrow
   */
  export type NomenklaturyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nomenklatury
     */
    select?: NomenklaturySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nomenklatury
     */
    omit?: NomenklaturyOmit<ExtArgs> | null
    /**
     * Filter, which Nomenklatury to fetch.
     */
    where: NomenklaturyWhereUniqueInput
  }

  /**
   * Nomenklatury findFirst
   */
  export type NomenklaturyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nomenklatury
     */
    select?: NomenklaturySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nomenklatury
     */
    omit?: NomenklaturyOmit<ExtArgs> | null
    /**
     * Filter, which Nomenklatury to fetch.
     */
    where?: NomenklaturyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Nomenklaturies to fetch.
     */
    orderBy?: NomenklaturyOrderByWithRelationInput | NomenklaturyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Nomenklaturies.
     */
    cursor?: NomenklaturyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Nomenklaturies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Nomenklaturies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Nomenklaturies.
     */
    distinct?: NomenklaturyScalarFieldEnum | NomenklaturyScalarFieldEnum[]
  }

  /**
   * Nomenklatury findFirstOrThrow
   */
  export type NomenklaturyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nomenklatury
     */
    select?: NomenklaturySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nomenklatury
     */
    omit?: NomenklaturyOmit<ExtArgs> | null
    /**
     * Filter, which Nomenklatury to fetch.
     */
    where?: NomenklaturyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Nomenklaturies to fetch.
     */
    orderBy?: NomenklaturyOrderByWithRelationInput | NomenklaturyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Nomenklaturies.
     */
    cursor?: NomenklaturyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Nomenklaturies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Nomenklaturies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Nomenklaturies.
     */
    distinct?: NomenklaturyScalarFieldEnum | NomenklaturyScalarFieldEnum[]
  }

  /**
   * Nomenklatury findMany
   */
  export type NomenklaturyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nomenklatury
     */
    select?: NomenklaturySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nomenklatury
     */
    omit?: NomenklaturyOmit<ExtArgs> | null
    /**
     * Filter, which Nomenklaturies to fetch.
     */
    where?: NomenklaturyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Nomenklaturies to fetch.
     */
    orderBy?: NomenklaturyOrderByWithRelationInput | NomenklaturyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Nomenklaturies.
     */
    cursor?: NomenklaturyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Nomenklaturies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Nomenklaturies.
     */
    skip?: number
    distinct?: NomenklaturyScalarFieldEnum | NomenklaturyScalarFieldEnum[]
  }

  /**
   * Nomenklatury create
   */
  export type NomenklaturyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nomenklatury
     */
    select?: NomenklaturySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nomenklatury
     */
    omit?: NomenklaturyOmit<ExtArgs> | null
    /**
     * The data needed to create a Nomenklatury.
     */
    data: XOR<NomenklaturyCreateInput, NomenklaturyUncheckedCreateInput>
  }

  /**
   * Nomenklatury createMany
   */
  export type NomenklaturyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Nomenklaturies.
     */
    data: NomenklaturyCreateManyInput | NomenklaturyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Nomenklatury createManyAndReturn
   */
  export type NomenklaturyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nomenklatury
     */
    select?: NomenklaturySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Nomenklatury
     */
    omit?: NomenklaturyOmit<ExtArgs> | null
    /**
     * The data used to create many Nomenklaturies.
     */
    data: NomenklaturyCreateManyInput | NomenklaturyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Nomenklatury update
   */
  export type NomenklaturyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nomenklatury
     */
    select?: NomenklaturySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nomenklatury
     */
    omit?: NomenklaturyOmit<ExtArgs> | null
    /**
     * The data needed to update a Nomenklatury.
     */
    data: XOR<NomenklaturyUpdateInput, NomenklaturyUncheckedUpdateInput>
    /**
     * Choose, which Nomenklatury to update.
     */
    where: NomenklaturyWhereUniqueInput
  }

  /**
   * Nomenklatury updateMany
   */
  export type NomenklaturyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Nomenklaturies.
     */
    data: XOR<NomenklaturyUpdateManyMutationInput, NomenklaturyUncheckedUpdateManyInput>
    /**
     * Filter which Nomenklaturies to update
     */
    where?: NomenklaturyWhereInput
    /**
     * Limit how many Nomenklaturies to update.
     */
    limit?: number
  }

  /**
   * Nomenklatury updateManyAndReturn
   */
  export type NomenklaturyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nomenklatury
     */
    select?: NomenklaturySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Nomenklatury
     */
    omit?: NomenklaturyOmit<ExtArgs> | null
    /**
     * The data used to update Nomenklaturies.
     */
    data: XOR<NomenklaturyUpdateManyMutationInput, NomenklaturyUncheckedUpdateManyInput>
    /**
     * Filter which Nomenklaturies to update
     */
    where?: NomenklaturyWhereInput
    /**
     * Limit how many Nomenklaturies to update.
     */
    limit?: number
  }

  /**
   * Nomenklatury upsert
   */
  export type NomenklaturyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nomenklatury
     */
    select?: NomenklaturySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nomenklatury
     */
    omit?: NomenklaturyOmit<ExtArgs> | null
    /**
     * The filter to search for the Nomenklatury to update in case it exists.
     */
    where: NomenklaturyWhereUniqueInput
    /**
     * In case the Nomenklatury found by the `where` argument doesn't exist, create a new Nomenklatury with this data.
     */
    create: XOR<NomenklaturyCreateInput, NomenklaturyUncheckedCreateInput>
    /**
     * In case the Nomenklatury was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NomenklaturyUpdateInput, NomenklaturyUncheckedUpdateInput>
  }

  /**
   * Nomenklatury delete
   */
  export type NomenklaturyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nomenklatury
     */
    select?: NomenklaturySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nomenklatury
     */
    omit?: NomenklaturyOmit<ExtArgs> | null
    /**
     * Filter which Nomenklatury to delete.
     */
    where: NomenklaturyWhereUniqueInput
  }

  /**
   * Nomenklatury deleteMany
   */
  export type NomenklaturyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Nomenklaturies to delete
     */
    where?: NomenklaturyWhereInput
    /**
     * Limit how many Nomenklaturies to delete.
     */
    limit?: number
  }

  /**
   * Nomenklatury without action
   */
  export type NomenklaturyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nomenklatury
     */
    select?: NomenklaturySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nomenklatury
     */
    omit?: NomenklaturyOmit<ExtArgs> | null
  }


  /**
   * Model Nomenklatury_Products
   */

  export type AggregateNomenklatury_Products = {
    _count: Nomenklatury_ProductsCountAggregateOutputType | null
    _min: Nomenklatury_ProductsMinAggregateOutputType | null
    _max: Nomenklatury_ProductsMaxAggregateOutputType | null
  }

  export type Nomenklatury_ProductsMinAggregateOutputType = {
    nomenclatureId: string | null
    productId: string | null
  }

  export type Nomenklatury_ProductsMaxAggregateOutputType = {
    nomenclatureId: string | null
    productId: string | null
  }

  export type Nomenklatury_ProductsCountAggregateOutputType = {
    nomenclatureId: number
    productId: number
    _all: number
  }


  export type Nomenklatury_ProductsMinAggregateInputType = {
    nomenclatureId?: true
    productId?: true
  }

  export type Nomenklatury_ProductsMaxAggregateInputType = {
    nomenclatureId?: true
    productId?: true
  }

  export type Nomenklatury_ProductsCountAggregateInputType = {
    nomenclatureId?: true
    productId?: true
    _all?: true
  }

  export type Nomenklatury_ProductsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Nomenklatury_Products to aggregate.
     */
    where?: Nomenklatury_ProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Nomenklatury_Products to fetch.
     */
    orderBy?: Nomenklatury_ProductsOrderByWithRelationInput | Nomenklatury_ProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Nomenklatury_ProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Nomenklatury_Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Nomenklatury_Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Nomenklatury_Products
    **/
    _count?: true | Nomenklatury_ProductsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Nomenklatury_ProductsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Nomenklatury_ProductsMaxAggregateInputType
  }

  export type GetNomenklatury_ProductsAggregateType<T extends Nomenklatury_ProductsAggregateArgs> = {
        [P in keyof T & keyof AggregateNomenklatury_Products]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNomenklatury_Products[P]>
      : GetScalarType<T[P], AggregateNomenklatury_Products[P]>
  }




  export type Nomenklatury_ProductsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Nomenklatury_ProductsWhereInput
    orderBy?: Nomenklatury_ProductsOrderByWithAggregationInput | Nomenklatury_ProductsOrderByWithAggregationInput[]
    by: Nomenklatury_ProductsScalarFieldEnum[] | Nomenklatury_ProductsScalarFieldEnum
    having?: Nomenklatury_ProductsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Nomenklatury_ProductsCountAggregateInputType | true
    _min?: Nomenklatury_ProductsMinAggregateInputType
    _max?: Nomenklatury_ProductsMaxAggregateInputType
  }

  export type Nomenklatury_ProductsGroupByOutputType = {
    nomenclatureId: string
    productId: string
    _count: Nomenklatury_ProductsCountAggregateOutputType | null
    _min: Nomenklatury_ProductsMinAggregateOutputType | null
    _max: Nomenklatury_ProductsMaxAggregateOutputType | null
  }

  type GetNomenklatury_ProductsGroupByPayload<T extends Nomenklatury_ProductsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Nomenklatury_ProductsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Nomenklatury_ProductsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Nomenklatury_ProductsGroupByOutputType[P]>
            : GetScalarType<T[P], Nomenklatury_ProductsGroupByOutputType[P]>
        }
      >
    >


  export type Nomenklatury_ProductsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nomenclatureId?: boolean
    productId?: boolean
  }, ExtArgs["result"]["nomenklatury_Products"]>

  export type Nomenklatury_ProductsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nomenclatureId?: boolean
    productId?: boolean
  }, ExtArgs["result"]["nomenklatury_Products"]>

  export type Nomenklatury_ProductsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nomenclatureId?: boolean
    productId?: boolean
  }, ExtArgs["result"]["nomenklatury_Products"]>

  export type Nomenklatury_ProductsSelectScalar = {
    nomenclatureId?: boolean
    productId?: boolean
  }

  export type Nomenklatury_ProductsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"nomenclatureId" | "productId", ExtArgs["result"]["nomenklatury_Products"]>

  export type $Nomenklatury_ProductsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Nomenklatury_Products"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      nomenclatureId: string
      productId: string
    }, ExtArgs["result"]["nomenklatury_Products"]>
    composites: {}
  }

  type Nomenklatury_ProductsGetPayload<S extends boolean | null | undefined | Nomenklatury_ProductsDefaultArgs> = $Result.GetResult<Prisma.$Nomenklatury_ProductsPayload, S>

  type Nomenklatury_ProductsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Nomenklatury_ProductsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Nomenklatury_ProductsCountAggregateInputType | true
    }

  export interface Nomenklatury_ProductsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Nomenklatury_Products'], meta: { name: 'Nomenklatury_Products' } }
    /**
     * Find zero or one Nomenklatury_Products that matches the filter.
     * @param {Nomenklatury_ProductsFindUniqueArgs} args - Arguments to find a Nomenklatury_Products
     * @example
     * // Get one Nomenklatury_Products
     * const nomenklatury_Products = await prisma.nomenklatury_Products.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Nomenklatury_ProductsFindUniqueArgs>(args: SelectSubset<T, Nomenklatury_ProductsFindUniqueArgs<ExtArgs>>): Prisma__Nomenklatury_ProductsClient<$Result.GetResult<Prisma.$Nomenklatury_ProductsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Nomenklatury_Products that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Nomenklatury_ProductsFindUniqueOrThrowArgs} args - Arguments to find a Nomenklatury_Products
     * @example
     * // Get one Nomenklatury_Products
     * const nomenklatury_Products = await prisma.nomenklatury_Products.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Nomenklatury_ProductsFindUniqueOrThrowArgs>(args: SelectSubset<T, Nomenklatury_ProductsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Nomenklatury_ProductsClient<$Result.GetResult<Prisma.$Nomenklatury_ProductsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Nomenklatury_Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Nomenklatury_ProductsFindFirstArgs} args - Arguments to find a Nomenklatury_Products
     * @example
     * // Get one Nomenklatury_Products
     * const nomenklatury_Products = await prisma.nomenklatury_Products.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Nomenklatury_ProductsFindFirstArgs>(args?: SelectSubset<T, Nomenklatury_ProductsFindFirstArgs<ExtArgs>>): Prisma__Nomenklatury_ProductsClient<$Result.GetResult<Prisma.$Nomenklatury_ProductsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Nomenklatury_Products that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Nomenklatury_ProductsFindFirstOrThrowArgs} args - Arguments to find a Nomenklatury_Products
     * @example
     * // Get one Nomenklatury_Products
     * const nomenklatury_Products = await prisma.nomenklatury_Products.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Nomenklatury_ProductsFindFirstOrThrowArgs>(args?: SelectSubset<T, Nomenklatury_ProductsFindFirstOrThrowArgs<ExtArgs>>): Prisma__Nomenklatury_ProductsClient<$Result.GetResult<Prisma.$Nomenklatury_ProductsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Nomenklatury_Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Nomenklatury_ProductsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Nomenklatury_Products
     * const nomenklatury_Products = await prisma.nomenklatury_Products.findMany()
     * 
     * // Get first 10 Nomenklatury_Products
     * const nomenklatury_Products = await prisma.nomenklatury_Products.findMany({ take: 10 })
     * 
     * // Only select the `nomenclatureId`
     * const nomenklatury_ProductsWithNomenclatureIdOnly = await prisma.nomenklatury_Products.findMany({ select: { nomenclatureId: true } })
     * 
     */
    findMany<T extends Nomenklatury_ProductsFindManyArgs>(args?: SelectSubset<T, Nomenklatury_ProductsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Nomenklatury_ProductsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Nomenklatury_Products.
     * @param {Nomenklatury_ProductsCreateArgs} args - Arguments to create a Nomenklatury_Products.
     * @example
     * // Create one Nomenklatury_Products
     * const Nomenklatury_Products = await prisma.nomenklatury_Products.create({
     *   data: {
     *     // ... data to create a Nomenklatury_Products
     *   }
     * })
     * 
     */
    create<T extends Nomenklatury_ProductsCreateArgs>(args: SelectSubset<T, Nomenklatury_ProductsCreateArgs<ExtArgs>>): Prisma__Nomenklatury_ProductsClient<$Result.GetResult<Prisma.$Nomenklatury_ProductsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Nomenklatury_Products.
     * @param {Nomenklatury_ProductsCreateManyArgs} args - Arguments to create many Nomenklatury_Products.
     * @example
     * // Create many Nomenklatury_Products
     * const nomenklatury_Products = await prisma.nomenklatury_Products.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Nomenklatury_ProductsCreateManyArgs>(args?: SelectSubset<T, Nomenklatury_ProductsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Nomenklatury_Products and returns the data saved in the database.
     * @param {Nomenklatury_ProductsCreateManyAndReturnArgs} args - Arguments to create many Nomenklatury_Products.
     * @example
     * // Create many Nomenklatury_Products
     * const nomenklatury_Products = await prisma.nomenklatury_Products.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Nomenklatury_Products and only return the `nomenclatureId`
     * const nomenklatury_ProductsWithNomenclatureIdOnly = await prisma.nomenklatury_Products.createManyAndReturn({
     *   select: { nomenclatureId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Nomenklatury_ProductsCreateManyAndReturnArgs>(args?: SelectSubset<T, Nomenklatury_ProductsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Nomenklatury_ProductsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Nomenklatury_Products.
     * @param {Nomenklatury_ProductsDeleteArgs} args - Arguments to delete one Nomenklatury_Products.
     * @example
     * // Delete one Nomenklatury_Products
     * const Nomenklatury_Products = await prisma.nomenklatury_Products.delete({
     *   where: {
     *     // ... filter to delete one Nomenklatury_Products
     *   }
     * })
     * 
     */
    delete<T extends Nomenklatury_ProductsDeleteArgs>(args: SelectSubset<T, Nomenklatury_ProductsDeleteArgs<ExtArgs>>): Prisma__Nomenklatury_ProductsClient<$Result.GetResult<Prisma.$Nomenklatury_ProductsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Nomenklatury_Products.
     * @param {Nomenklatury_ProductsUpdateArgs} args - Arguments to update one Nomenklatury_Products.
     * @example
     * // Update one Nomenklatury_Products
     * const nomenklatury_Products = await prisma.nomenklatury_Products.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Nomenklatury_ProductsUpdateArgs>(args: SelectSubset<T, Nomenklatury_ProductsUpdateArgs<ExtArgs>>): Prisma__Nomenklatury_ProductsClient<$Result.GetResult<Prisma.$Nomenklatury_ProductsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Nomenklatury_Products.
     * @param {Nomenklatury_ProductsDeleteManyArgs} args - Arguments to filter Nomenklatury_Products to delete.
     * @example
     * // Delete a few Nomenklatury_Products
     * const { count } = await prisma.nomenklatury_Products.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Nomenklatury_ProductsDeleteManyArgs>(args?: SelectSubset<T, Nomenklatury_ProductsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Nomenklatury_Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Nomenklatury_ProductsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Nomenklatury_Products
     * const nomenklatury_Products = await prisma.nomenklatury_Products.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Nomenklatury_ProductsUpdateManyArgs>(args: SelectSubset<T, Nomenklatury_ProductsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Nomenklatury_Products and returns the data updated in the database.
     * @param {Nomenklatury_ProductsUpdateManyAndReturnArgs} args - Arguments to update many Nomenklatury_Products.
     * @example
     * // Update many Nomenklatury_Products
     * const nomenklatury_Products = await prisma.nomenklatury_Products.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Nomenklatury_Products and only return the `nomenclatureId`
     * const nomenklatury_ProductsWithNomenclatureIdOnly = await prisma.nomenklatury_Products.updateManyAndReturn({
     *   select: { nomenclatureId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends Nomenklatury_ProductsUpdateManyAndReturnArgs>(args: SelectSubset<T, Nomenklatury_ProductsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Nomenklatury_ProductsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Nomenklatury_Products.
     * @param {Nomenklatury_ProductsUpsertArgs} args - Arguments to update or create a Nomenklatury_Products.
     * @example
     * // Update or create a Nomenklatury_Products
     * const nomenklatury_Products = await prisma.nomenklatury_Products.upsert({
     *   create: {
     *     // ... data to create a Nomenklatury_Products
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Nomenklatury_Products we want to update
     *   }
     * })
     */
    upsert<T extends Nomenklatury_ProductsUpsertArgs>(args: SelectSubset<T, Nomenklatury_ProductsUpsertArgs<ExtArgs>>): Prisma__Nomenklatury_ProductsClient<$Result.GetResult<Prisma.$Nomenklatury_ProductsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Nomenklatury_Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Nomenklatury_ProductsCountArgs} args - Arguments to filter Nomenklatury_Products to count.
     * @example
     * // Count the number of Nomenklatury_Products
     * const count = await prisma.nomenklatury_Products.count({
     *   where: {
     *     // ... the filter for the Nomenklatury_Products we want to count
     *   }
     * })
    **/
    count<T extends Nomenklatury_ProductsCountArgs>(
      args?: Subset<T, Nomenklatury_ProductsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Nomenklatury_ProductsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Nomenklatury_Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Nomenklatury_ProductsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Nomenklatury_ProductsAggregateArgs>(args: Subset<T, Nomenklatury_ProductsAggregateArgs>): Prisma.PrismaPromise<GetNomenklatury_ProductsAggregateType<T>>

    /**
     * Group by Nomenklatury_Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Nomenklatury_ProductsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Nomenklatury_ProductsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Nomenklatury_ProductsGroupByArgs['orderBy'] }
        : { orderBy?: Nomenklatury_ProductsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Nomenklatury_ProductsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNomenklatury_ProductsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Nomenklatury_Products model
   */
  readonly fields: Nomenklatury_ProductsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Nomenklatury_Products.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Nomenklatury_ProductsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Nomenklatury_Products model
   */
  interface Nomenklatury_ProductsFieldRefs {
    readonly nomenclatureId: FieldRef<"Nomenklatury_Products", 'String'>
    readonly productId: FieldRef<"Nomenklatury_Products", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Nomenklatury_Products findUnique
   */
  export type Nomenklatury_ProductsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nomenklatury_Products
     */
    select?: Nomenklatury_ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nomenklatury_Products
     */
    omit?: Nomenklatury_ProductsOmit<ExtArgs> | null
    /**
     * Filter, which Nomenklatury_Products to fetch.
     */
    where: Nomenklatury_ProductsWhereUniqueInput
  }

  /**
   * Nomenklatury_Products findUniqueOrThrow
   */
  export type Nomenklatury_ProductsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nomenklatury_Products
     */
    select?: Nomenklatury_ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nomenklatury_Products
     */
    omit?: Nomenklatury_ProductsOmit<ExtArgs> | null
    /**
     * Filter, which Nomenklatury_Products to fetch.
     */
    where: Nomenklatury_ProductsWhereUniqueInput
  }

  /**
   * Nomenklatury_Products findFirst
   */
  export type Nomenklatury_ProductsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nomenklatury_Products
     */
    select?: Nomenklatury_ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nomenklatury_Products
     */
    omit?: Nomenklatury_ProductsOmit<ExtArgs> | null
    /**
     * Filter, which Nomenklatury_Products to fetch.
     */
    where?: Nomenklatury_ProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Nomenklatury_Products to fetch.
     */
    orderBy?: Nomenklatury_ProductsOrderByWithRelationInput | Nomenklatury_ProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Nomenklatury_Products.
     */
    cursor?: Nomenklatury_ProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Nomenklatury_Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Nomenklatury_Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Nomenklatury_Products.
     */
    distinct?: Nomenklatury_ProductsScalarFieldEnum | Nomenklatury_ProductsScalarFieldEnum[]
  }

  /**
   * Nomenklatury_Products findFirstOrThrow
   */
  export type Nomenklatury_ProductsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nomenklatury_Products
     */
    select?: Nomenklatury_ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nomenklatury_Products
     */
    omit?: Nomenklatury_ProductsOmit<ExtArgs> | null
    /**
     * Filter, which Nomenklatury_Products to fetch.
     */
    where?: Nomenklatury_ProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Nomenklatury_Products to fetch.
     */
    orderBy?: Nomenklatury_ProductsOrderByWithRelationInput | Nomenklatury_ProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Nomenklatury_Products.
     */
    cursor?: Nomenklatury_ProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Nomenklatury_Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Nomenklatury_Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Nomenklatury_Products.
     */
    distinct?: Nomenklatury_ProductsScalarFieldEnum | Nomenklatury_ProductsScalarFieldEnum[]
  }

  /**
   * Nomenklatury_Products findMany
   */
  export type Nomenklatury_ProductsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nomenklatury_Products
     */
    select?: Nomenklatury_ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nomenklatury_Products
     */
    omit?: Nomenklatury_ProductsOmit<ExtArgs> | null
    /**
     * Filter, which Nomenklatury_Products to fetch.
     */
    where?: Nomenklatury_ProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Nomenklatury_Products to fetch.
     */
    orderBy?: Nomenklatury_ProductsOrderByWithRelationInput | Nomenklatury_ProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Nomenklatury_Products.
     */
    cursor?: Nomenklatury_ProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Nomenklatury_Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Nomenklatury_Products.
     */
    skip?: number
    distinct?: Nomenklatury_ProductsScalarFieldEnum | Nomenklatury_ProductsScalarFieldEnum[]
  }

  /**
   * Nomenklatury_Products create
   */
  export type Nomenklatury_ProductsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nomenklatury_Products
     */
    select?: Nomenklatury_ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nomenklatury_Products
     */
    omit?: Nomenklatury_ProductsOmit<ExtArgs> | null
    /**
     * The data needed to create a Nomenklatury_Products.
     */
    data: XOR<Nomenklatury_ProductsCreateInput, Nomenklatury_ProductsUncheckedCreateInput>
  }

  /**
   * Nomenklatury_Products createMany
   */
  export type Nomenklatury_ProductsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Nomenklatury_Products.
     */
    data: Nomenklatury_ProductsCreateManyInput | Nomenklatury_ProductsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Nomenklatury_Products createManyAndReturn
   */
  export type Nomenklatury_ProductsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nomenklatury_Products
     */
    select?: Nomenklatury_ProductsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Nomenklatury_Products
     */
    omit?: Nomenklatury_ProductsOmit<ExtArgs> | null
    /**
     * The data used to create many Nomenklatury_Products.
     */
    data: Nomenklatury_ProductsCreateManyInput | Nomenklatury_ProductsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Nomenklatury_Products update
   */
  export type Nomenklatury_ProductsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nomenklatury_Products
     */
    select?: Nomenklatury_ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nomenklatury_Products
     */
    omit?: Nomenklatury_ProductsOmit<ExtArgs> | null
    /**
     * The data needed to update a Nomenklatury_Products.
     */
    data: XOR<Nomenklatury_ProductsUpdateInput, Nomenklatury_ProductsUncheckedUpdateInput>
    /**
     * Choose, which Nomenklatury_Products to update.
     */
    where: Nomenklatury_ProductsWhereUniqueInput
  }

  /**
   * Nomenklatury_Products updateMany
   */
  export type Nomenklatury_ProductsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Nomenklatury_Products.
     */
    data: XOR<Nomenklatury_ProductsUpdateManyMutationInput, Nomenklatury_ProductsUncheckedUpdateManyInput>
    /**
     * Filter which Nomenklatury_Products to update
     */
    where?: Nomenklatury_ProductsWhereInput
    /**
     * Limit how many Nomenklatury_Products to update.
     */
    limit?: number
  }

  /**
   * Nomenklatury_Products updateManyAndReturn
   */
  export type Nomenklatury_ProductsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nomenklatury_Products
     */
    select?: Nomenklatury_ProductsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Nomenklatury_Products
     */
    omit?: Nomenklatury_ProductsOmit<ExtArgs> | null
    /**
     * The data used to update Nomenklatury_Products.
     */
    data: XOR<Nomenklatury_ProductsUpdateManyMutationInput, Nomenklatury_ProductsUncheckedUpdateManyInput>
    /**
     * Filter which Nomenklatury_Products to update
     */
    where?: Nomenklatury_ProductsWhereInput
    /**
     * Limit how many Nomenklatury_Products to update.
     */
    limit?: number
  }

  /**
   * Nomenklatury_Products upsert
   */
  export type Nomenklatury_ProductsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nomenklatury_Products
     */
    select?: Nomenklatury_ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nomenklatury_Products
     */
    omit?: Nomenklatury_ProductsOmit<ExtArgs> | null
    /**
     * The filter to search for the Nomenklatury_Products to update in case it exists.
     */
    where: Nomenklatury_ProductsWhereUniqueInput
    /**
     * In case the Nomenklatury_Products found by the `where` argument doesn't exist, create a new Nomenklatury_Products with this data.
     */
    create: XOR<Nomenklatury_ProductsCreateInput, Nomenklatury_ProductsUncheckedCreateInput>
    /**
     * In case the Nomenklatury_Products was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Nomenklatury_ProductsUpdateInput, Nomenklatury_ProductsUncheckedUpdateInput>
  }

  /**
   * Nomenklatury_Products delete
   */
  export type Nomenklatury_ProductsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nomenklatury_Products
     */
    select?: Nomenklatury_ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nomenklatury_Products
     */
    omit?: Nomenklatury_ProductsOmit<ExtArgs> | null
    /**
     * Filter which Nomenklatury_Products to delete.
     */
    where: Nomenklatury_ProductsWhereUniqueInput
  }

  /**
   * Nomenklatury_Products deleteMany
   */
  export type Nomenklatury_ProductsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Nomenklatury_Products to delete
     */
    where?: Nomenklatury_ProductsWhereInput
    /**
     * Limit how many Nomenklatury_Products to delete.
     */
    limit?: number
  }

  /**
   * Nomenklatury_Products without action
   */
  export type Nomenklatury_ProductsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nomenklatury_Products
     */
    select?: Nomenklatury_ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nomenklatury_Products
     */
    omit?: Nomenklatury_ProductsOmit<ExtArgs> | null
  }


  /**
   * Model Documents
   */

  export type AggregateDocuments = {
    _count: DocumentsCountAggregateOutputType | null
    _min: DocumentsMinAggregateOutputType | null
    _max: DocumentsMaxAggregateOutputType | null
  }

  export type DocumentsMinAggregateOutputType = {
    documentId: string | null
    organizationId: string | null
    warehouseId: string | null
    documentStatus: string | null
    createdBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DocumentsMaxAggregateOutputType = {
    documentId: string | null
    organizationId: string | null
    warehouseId: string | null
    documentStatus: string | null
    createdBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DocumentsCountAggregateOutputType = {
    documentId: number
    organizationId: number
    warehouseId: number
    documentStatus: number
    createdBy: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DocumentsMinAggregateInputType = {
    documentId?: true
    organizationId?: true
    warehouseId?: true
    documentStatus?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DocumentsMaxAggregateInputType = {
    documentId?: true
    organizationId?: true
    warehouseId?: true
    documentStatus?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DocumentsCountAggregateInputType = {
    documentId?: true
    organizationId?: true
    warehouseId?: true
    documentStatus?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DocumentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Documents to aggregate.
     */
    where?: DocumentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentsOrderByWithRelationInput | DocumentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DocumentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Documents
    **/
    _count?: true | DocumentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DocumentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DocumentsMaxAggregateInputType
  }

  export type GetDocumentsAggregateType<T extends DocumentsAggregateArgs> = {
        [P in keyof T & keyof AggregateDocuments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocuments[P]>
      : GetScalarType<T[P], AggregateDocuments[P]>
  }




  export type DocumentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentsWhereInput
    orderBy?: DocumentsOrderByWithAggregationInput | DocumentsOrderByWithAggregationInput[]
    by: DocumentsScalarFieldEnum[] | DocumentsScalarFieldEnum
    having?: DocumentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DocumentsCountAggregateInputType | true
    _min?: DocumentsMinAggregateInputType
    _max?: DocumentsMaxAggregateInputType
  }

  export type DocumentsGroupByOutputType = {
    documentId: string
    organizationId: string
    warehouseId: string
    documentStatus: string
    createdBy: string
    createdAt: Date
    updatedAt: Date
    _count: DocumentsCountAggregateOutputType | null
    _min: DocumentsMinAggregateOutputType | null
    _max: DocumentsMaxAggregateOutputType | null
  }

  type GetDocumentsGroupByPayload<T extends DocumentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DocumentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DocumentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DocumentsGroupByOutputType[P]>
            : GetScalarType<T[P], DocumentsGroupByOutputType[P]>
        }
      >
    >


  export type DocumentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    documentId?: boolean
    organizationId?: boolean
    warehouseId?: boolean
    documentStatus?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["documents"]>

  export type DocumentsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    documentId?: boolean
    organizationId?: boolean
    warehouseId?: boolean
    documentStatus?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["documents"]>

  export type DocumentsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    documentId?: boolean
    organizationId?: boolean
    warehouseId?: boolean
    documentStatus?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["documents"]>

  export type DocumentsSelectScalar = {
    documentId?: boolean
    organizationId?: boolean
    warehouseId?: boolean
    documentStatus?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DocumentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"documentId" | "organizationId" | "warehouseId" | "documentStatus" | "createdBy" | "createdAt" | "updatedAt", ExtArgs["result"]["documents"]>

  export type $DocumentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Documents"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      documentId: string
      organizationId: string
      warehouseId: string
      documentStatus: string
      createdBy: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["documents"]>
    composites: {}
  }

  type DocumentsGetPayload<S extends boolean | null | undefined | DocumentsDefaultArgs> = $Result.GetResult<Prisma.$DocumentsPayload, S>

  type DocumentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DocumentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DocumentsCountAggregateInputType | true
    }

  export interface DocumentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Documents'], meta: { name: 'Documents' } }
    /**
     * Find zero or one Documents that matches the filter.
     * @param {DocumentsFindUniqueArgs} args - Arguments to find a Documents
     * @example
     * // Get one Documents
     * const documents = await prisma.documents.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DocumentsFindUniqueArgs>(args: SelectSubset<T, DocumentsFindUniqueArgs<ExtArgs>>): Prisma__DocumentsClient<$Result.GetResult<Prisma.$DocumentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Documents that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DocumentsFindUniqueOrThrowArgs} args - Arguments to find a Documents
     * @example
     * // Get one Documents
     * const documents = await prisma.documents.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DocumentsFindUniqueOrThrowArgs>(args: SelectSubset<T, DocumentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DocumentsClient<$Result.GetResult<Prisma.$DocumentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Documents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentsFindFirstArgs} args - Arguments to find a Documents
     * @example
     * // Get one Documents
     * const documents = await prisma.documents.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DocumentsFindFirstArgs>(args?: SelectSubset<T, DocumentsFindFirstArgs<ExtArgs>>): Prisma__DocumentsClient<$Result.GetResult<Prisma.$DocumentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Documents that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentsFindFirstOrThrowArgs} args - Arguments to find a Documents
     * @example
     * // Get one Documents
     * const documents = await prisma.documents.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DocumentsFindFirstOrThrowArgs>(args?: SelectSubset<T, DocumentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__DocumentsClient<$Result.GetResult<Prisma.$DocumentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Documents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Documents
     * const documents = await prisma.documents.findMany()
     * 
     * // Get first 10 Documents
     * const documents = await prisma.documents.findMany({ take: 10 })
     * 
     * // Only select the `documentId`
     * const documentsWithDocumentIdOnly = await prisma.documents.findMany({ select: { documentId: true } })
     * 
     */
    findMany<T extends DocumentsFindManyArgs>(args?: SelectSubset<T, DocumentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Documents.
     * @param {DocumentsCreateArgs} args - Arguments to create a Documents.
     * @example
     * // Create one Documents
     * const Documents = await prisma.documents.create({
     *   data: {
     *     // ... data to create a Documents
     *   }
     * })
     * 
     */
    create<T extends DocumentsCreateArgs>(args: SelectSubset<T, DocumentsCreateArgs<ExtArgs>>): Prisma__DocumentsClient<$Result.GetResult<Prisma.$DocumentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Documents.
     * @param {DocumentsCreateManyArgs} args - Arguments to create many Documents.
     * @example
     * // Create many Documents
     * const documents = await prisma.documents.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DocumentsCreateManyArgs>(args?: SelectSubset<T, DocumentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Documents and returns the data saved in the database.
     * @param {DocumentsCreateManyAndReturnArgs} args - Arguments to create many Documents.
     * @example
     * // Create many Documents
     * const documents = await prisma.documents.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Documents and only return the `documentId`
     * const documentsWithDocumentIdOnly = await prisma.documents.createManyAndReturn({
     *   select: { documentId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DocumentsCreateManyAndReturnArgs>(args?: SelectSubset<T, DocumentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Documents.
     * @param {DocumentsDeleteArgs} args - Arguments to delete one Documents.
     * @example
     * // Delete one Documents
     * const Documents = await prisma.documents.delete({
     *   where: {
     *     // ... filter to delete one Documents
     *   }
     * })
     * 
     */
    delete<T extends DocumentsDeleteArgs>(args: SelectSubset<T, DocumentsDeleteArgs<ExtArgs>>): Prisma__DocumentsClient<$Result.GetResult<Prisma.$DocumentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Documents.
     * @param {DocumentsUpdateArgs} args - Arguments to update one Documents.
     * @example
     * // Update one Documents
     * const documents = await prisma.documents.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DocumentsUpdateArgs>(args: SelectSubset<T, DocumentsUpdateArgs<ExtArgs>>): Prisma__DocumentsClient<$Result.GetResult<Prisma.$DocumentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Documents.
     * @param {DocumentsDeleteManyArgs} args - Arguments to filter Documents to delete.
     * @example
     * // Delete a few Documents
     * const { count } = await prisma.documents.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DocumentsDeleteManyArgs>(args?: SelectSubset<T, DocumentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Documents
     * const documents = await prisma.documents.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DocumentsUpdateManyArgs>(args: SelectSubset<T, DocumentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Documents and returns the data updated in the database.
     * @param {DocumentsUpdateManyAndReturnArgs} args - Arguments to update many Documents.
     * @example
     * // Update many Documents
     * const documents = await prisma.documents.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Documents and only return the `documentId`
     * const documentsWithDocumentIdOnly = await prisma.documents.updateManyAndReturn({
     *   select: { documentId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DocumentsUpdateManyAndReturnArgs>(args: SelectSubset<T, DocumentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Documents.
     * @param {DocumentsUpsertArgs} args - Arguments to update or create a Documents.
     * @example
     * // Update or create a Documents
     * const documents = await prisma.documents.upsert({
     *   create: {
     *     // ... data to create a Documents
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Documents we want to update
     *   }
     * })
     */
    upsert<T extends DocumentsUpsertArgs>(args: SelectSubset<T, DocumentsUpsertArgs<ExtArgs>>): Prisma__DocumentsClient<$Result.GetResult<Prisma.$DocumentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentsCountArgs} args - Arguments to filter Documents to count.
     * @example
     * // Count the number of Documents
     * const count = await prisma.documents.count({
     *   where: {
     *     // ... the filter for the Documents we want to count
     *   }
     * })
    **/
    count<T extends DocumentsCountArgs>(
      args?: Subset<T, DocumentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DocumentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DocumentsAggregateArgs>(args: Subset<T, DocumentsAggregateArgs>): Prisma.PrismaPromise<GetDocumentsAggregateType<T>>

    /**
     * Group by Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DocumentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DocumentsGroupByArgs['orderBy'] }
        : { orderBy?: DocumentsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DocumentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocumentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Documents model
   */
  readonly fields: DocumentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Documents.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DocumentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Documents model
   */
  interface DocumentsFieldRefs {
    readonly documentId: FieldRef<"Documents", 'String'>
    readonly organizationId: FieldRef<"Documents", 'String'>
    readonly warehouseId: FieldRef<"Documents", 'String'>
    readonly documentStatus: FieldRef<"Documents", 'String'>
    readonly createdBy: FieldRef<"Documents", 'String'>
    readonly createdAt: FieldRef<"Documents", 'DateTime'>
    readonly updatedAt: FieldRef<"Documents", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Documents findUnique
   */
  export type DocumentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documents
     */
    select?: DocumentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documents
     */
    omit?: DocumentsOmit<ExtArgs> | null
    /**
     * Filter, which Documents to fetch.
     */
    where: DocumentsWhereUniqueInput
  }

  /**
   * Documents findUniqueOrThrow
   */
  export type DocumentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documents
     */
    select?: DocumentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documents
     */
    omit?: DocumentsOmit<ExtArgs> | null
    /**
     * Filter, which Documents to fetch.
     */
    where: DocumentsWhereUniqueInput
  }

  /**
   * Documents findFirst
   */
  export type DocumentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documents
     */
    select?: DocumentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documents
     */
    omit?: DocumentsOmit<ExtArgs> | null
    /**
     * Filter, which Documents to fetch.
     */
    where?: DocumentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentsOrderByWithRelationInput | DocumentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Documents.
     */
    cursor?: DocumentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Documents.
     */
    distinct?: DocumentsScalarFieldEnum | DocumentsScalarFieldEnum[]
  }

  /**
   * Documents findFirstOrThrow
   */
  export type DocumentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documents
     */
    select?: DocumentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documents
     */
    omit?: DocumentsOmit<ExtArgs> | null
    /**
     * Filter, which Documents to fetch.
     */
    where?: DocumentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentsOrderByWithRelationInput | DocumentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Documents.
     */
    cursor?: DocumentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Documents.
     */
    distinct?: DocumentsScalarFieldEnum | DocumentsScalarFieldEnum[]
  }

  /**
   * Documents findMany
   */
  export type DocumentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documents
     */
    select?: DocumentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documents
     */
    omit?: DocumentsOmit<ExtArgs> | null
    /**
     * Filter, which Documents to fetch.
     */
    where?: DocumentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentsOrderByWithRelationInput | DocumentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Documents.
     */
    cursor?: DocumentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    distinct?: DocumentsScalarFieldEnum | DocumentsScalarFieldEnum[]
  }

  /**
   * Documents create
   */
  export type DocumentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documents
     */
    select?: DocumentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documents
     */
    omit?: DocumentsOmit<ExtArgs> | null
    /**
     * The data needed to create a Documents.
     */
    data: XOR<DocumentsCreateInput, DocumentsUncheckedCreateInput>
  }

  /**
   * Documents createMany
   */
  export type DocumentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Documents.
     */
    data: DocumentsCreateManyInput | DocumentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Documents createManyAndReturn
   */
  export type DocumentsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documents
     */
    select?: DocumentsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Documents
     */
    omit?: DocumentsOmit<ExtArgs> | null
    /**
     * The data used to create many Documents.
     */
    data: DocumentsCreateManyInput | DocumentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Documents update
   */
  export type DocumentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documents
     */
    select?: DocumentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documents
     */
    omit?: DocumentsOmit<ExtArgs> | null
    /**
     * The data needed to update a Documents.
     */
    data: XOR<DocumentsUpdateInput, DocumentsUncheckedUpdateInput>
    /**
     * Choose, which Documents to update.
     */
    where: DocumentsWhereUniqueInput
  }

  /**
   * Documents updateMany
   */
  export type DocumentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Documents.
     */
    data: XOR<DocumentsUpdateManyMutationInput, DocumentsUncheckedUpdateManyInput>
    /**
     * Filter which Documents to update
     */
    where?: DocumentsWhereInput
    /**
     * Limit how many Documents to update.
     */
    limit?: number
  }

  /**
   * Documents updateManyAndReturn
   */
  export type DocumentsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documents
     */
    select?: DocumentsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Documents
     */
    omit?: DocumentsOmit<ExtArgs> | null
    /**
     * The data used to update Documents.
     */
    data: XOR<DocumentsUpdateManyMutationInput, DocumentsUncheckedUpdateManyInput>
    /**
     * Filter which Documents to update
     */
    where?: DocumentsWhereInput
    /**
     * Limit how many Documents to update.
     */
    limit?: number
  }

  /**
   * Documents upsert
   */
  export type DocumentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documents
     */
    select?: DocumentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documents
     */
    omit?: DocumentsOmit<ExtArgs> | null
    /**
     * The filter to search for the Documents to update in case it exists.
     */
    where: DocumentsWhereUniqueInput
    /**
     * In case the Documents found by the `where` argument doesn't exist, create a new Documents with this data.
     */
    create: XOR<DocumentsCreateInput, DocumentsUncheckedCreateInput>
    /**
     * In case the Documents was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DocumentsUpdateInput, DocumentsUncheckedUpdateInput>
  }

  /**
   * Documents delete
   */
  export type DocumentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documents
     */
    select?: DocumentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documents
     */
    omit?: DocumentsOmit<ExtArgs> | null
    /**
     * Filter which Documents to delete.
     */
    where: DocumentsWhereUniqueInput
  }

  /**
   * Documents deleteMany
   */
  export type DocumentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Documents to delete
     */
    where?: DocumentsWhereInput
    /**
     * Limit how many Documents to delete.
     */
    limit?: number
  }

  /**
   * Documents without action
   */
  export type DocumentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documents
     */
    select?: DocumentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documents
     */
    omit?: DocumentsOmit<ExtArgs> | null
  }


  /**
   * Model Documents_Products
   */

  export type AggregateDocuments_Products = {
    _count: Documents_ProductsCountAggregateOutputType | null
    _avg: Documents_ProductsAvgAggregateOutputType | null
    _sum: Documents_ProductsSumAggregateOutputType | null
    _min: Documents_ProductsMinAggregateOutputType | null
    _max: Documents_ProductsMaxAggregateOutputType | null
  }

  export type Documents_ProductsAvgAggregateOutputType = {
    documentId: number | null
    productId: number | null
    quantityExpected: number | null
    quantityChecked: number | null
  }

  export type Documents_ProductsSumAggregateOutputType = {
    documentId: number | null
    productId: number | null
    quantityExpected: number | null
    quantityChecked: number | null
  }

  export type Documents_ProductsMinAggregateOutputType = {
    documentProductId: string | null
    documentId: number | null
    productId: number | null
    quantityExpected: number | null
    quantityChecked: number | null
    updatedAt: Date | null
  }

  export type Documents_ProductsMaxAggregateOutputType = {
    documentProductId: string | null
    documentId: number | null
    productId: number | null
    quantityExpected: number | null
    quantityChecked: number | null
    updatedAt: Date | null
  }

  export type Documents_ProductsCountAggregateOutputType = {
    documentProductId: number
    documentId: number
    productId: number
    quantityExpected: number
    quantityChecked: number
    updatedAt: number
    _all: number
  }


  export type Documents_ProductsAvgAggregateInputType = {
    documentId?: true
    productId?: true
    quantityExpected?: true
    quantityChecked?: true
  }

  export type Documents_ProductsSumAggregateInputType = {
    documentId?: true
    productId?: true
    quantityExpected?: true
    quantityChecked?: true
  }

  export type Documents_ProductsMinAggregateInputType = {
    documentProductId?: true
    documentId?: true
    productId?: true
    quantityExpected?: true
    quantityChecked?: true
    updatedAt?: true
  }

  export type Documents_ProductsMaxAggregateInputType = {
    documentProductId?: true
    documentId?: true
    productId?: true
    quantityExpected?: true
    quantityChecked?: true
    updatedAt?: true
  }

  export type Documents_ProductsCountAggregateInputType = {
    documentProductId?: true
    documentId?: true
    productId?: true
    quantityExpected?: true
    quantityChecked?: true
    updatedAt?: true
    _all?: true
  }

  export type Documents_ProductsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Documents_Products to aggregate.
     */
    where?: Documents_ProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents_Products to fetch.
     */
    orderBy?: Documents_ProductsOrderByWithRelationInput | Documents_ProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Documents_ProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents_Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents_Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Documents_Products
    **/
    _count?: true | Documents_ProductsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Documents_ProductsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Documents_ProductsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Documents_ProductsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Documents_ProductsMaxAggregateInputType
  }

  export type GetDocuments_ProductsAggregateType<T extends Documents_ProductsAggregateArgs> = {
        [P in keyof T & keyof AggregateDocuments_Products]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocuments_Products[P]>
      : GetScalarType<T[P], AggregateDocuments_Products[P]>
  }




  export type Documents_ProductsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Documents_ProductsWhereInput
    orderBy?: Documents_ProductsOrderByWithAggregationInput | Documents_ProductsOrderByWithAggregationInput[]
    by: Documents_ProductsScalarFieldEnum[] | Documents_ProductsScalarFieldEnum
    having?: Documents_ProductsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Documents_ProductsCountAggregateInputType | true
    _avg?: Documents_ProductsAvgAggregateInputType
    _sum?: Documents_ProductsSumAggregateInputType
    _min?: Documents_ProductsMinAggregateInputType
    _max?: Documents_ProductsMaxAggregateInputType
  }

  export type Documents_ProductsGroupByOutputType = {
    documentProductId: string
    documentId: number
    productId: number
    quantityExpected: number
    quantityChecked: number
    updatedAt: Date
    _count: Documents_ProductsCountAggregateOutputType | null
    _avg: Documents_ProductsAvgAggregateOutputType | null
    _sum: Documents_ProductsSumAggregateOutputType | null
    _min: Documents_ProductsMinAggregateOutputType | null
    _max: Documents_ProductsMaxAggregateOutputType | null
  }

  type GetDocuments_ProductsGroupByPayload<T extends Documents_ProductsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Documents_ProductsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Documents_ProductsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Documents_ProductsGroupByOutputType[P]>
            : GetScalarType<T[P], Documents_ProductsGroupByOutputType[P]>
        }
      >
    >


  export type Documents_ProductsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    documentProductId?: boolean
    documentId?: boolean
    productId?: boolean
    quantityExpected?: boolean
    quantityChecked?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["documents_Products"]>

  export type Documents_ProductsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    documentProductId?: boolean
    documentId?: boolean
    productId?: boolean
    quantityExpected?: boolean
    quantityChecked?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["documents_Products"]>

  export type Documents_ProductsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    documentProductId?: boolean
    documentId?: boolean
    productId?: boolean
    quantityExpected?: boolean
    quantityChecked?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["documents_Products"]>

  export type Documents_ProductsSelectScalar = {
    documentProductId?: boolean
    documentId?: boolean
    productId?: boolean
    quantityExpected?: boolean
    quantityChecked?: boolean
    updatedAt?: boolean
  }

  export type Documents_ProductsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"documentProductId" | "documentId" | "productId" | "quantityExpected" | "quantityChecked" | "updatedAt", ExtArgs["result"]["documents_Products"]>

  export type $Documents_ProductsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Documents_Products"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      documentProductId: string
      documentId: number
      productId: number
      quantityExpected: number
      quantityChecked: number
      updatedAt: Date
    }, ExtArgs["result"]["documents_Products"]>
    composites: {}
  }

  type Documents_ProductsGetPayload<S extends boolean | null | undefined | Documents_ProductsDefaultArgs> = $Result.GetResult<Prisma.$Documents_ProductsPayload, S>

  type Documents_ProductsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Documents_ProductsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Documents_ProductsCountAggregateInputType | true
    }

  export interface Documents_ProductsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Documents_Products'], meta: { name: 'Documents_Products' } }
    /**
     * Find zero or one Documents_Products that matches the filter.
     * @param {Documents_ProductsFindUniqueArgs} args - Arguments to find a Documents_Products
     * @example
     * // Get one Documents_Products
     * const documents_Products = await prisma.documents_Products.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Documents_ProductsFindUniqueArgs>(args: SelectSubset<T, Documents_ProductsFindUniqueArgs<ExtArgs>>): Prisma__Documents_ProductsClient<$Result.GetResult<Prisma.$Documents_ProductsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Documents_Products that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Documents_ProductsFindUniqueOrThrowArgs} args - Arguments to find a Documents_Products
     * @example
     * // Get one Documents_Products
     * const documents_Products = await prisma.documents_Products.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Documents_ProductsFindUniqueOrThrowArgs>(args: SelectSubset<T, Documents_ProductsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Documents_ProductsClient<$Result.GetResult<Prisma.$Documents_ProductsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Documents_Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Documents_ProductsFindFirstArgs} args - Arguments to find a Documents_Products
     * @example
     * // Get one Documents_Products
     * const documents_Products = await prisma.documents_Products.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Documents_ProductsFindFirstArgs>(args?: SelectSubset<T, Documents_ProductsFindFirstArgs<ExtArgs>>): Prisma__Documents_ProductsClient<$Result.GetResult<Prisma.$Documents_ProductsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Documents_Products that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Documents_ProductsFindFirstOrThrowArgs} args - Arguments to find a Documents_Products
     * @example
     * // Get one Documents_Products
     * const documents_Products = await prisma.documents_Products.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Documents_ProductsFindFirstOrThrowArgs>(args?: SelectSubset<T, Documents_ProductsFindFirstOrThrowArgs<ExtArgs>>): Prisma__Documents_ProductsClient<$Result.GetResult<Prisma.$Documents_ProductsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Documents_Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Documents_ProductsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Documents_Products
     * const documents_Products = await prisma.documents_Products.findMany()
     * 
     * // Get first 10 Documents_Products
     * const documents_Products = await prisma.documents_Products.findMany({ take: 10 })
     * 
     * // Only select the `documentProductId`
     * const documents_ProductsWithDocumentProductIdOnly = await prisma.documents_Products.findMany({ select: { documentProductId: true } })
     * 
     */
    findMany<T extends Documents_ProductsFindManyArgs>(args?: SelectSubset<T, Documents_ProductsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Documents_ProductsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Documents_Products.
     * @param {Documents_ProductsCreateArgs} args - Arguments to create a Documents_Products.
     * @example
     * // Create one Documents_Products
     * const Documents_Products = await prisma.documents_Products.create({
     *   data: {
     *     // ... data to create a Documents_Products
     *   }
     * })
     * 
     */
    create<T extends Documents_ProductsCreateArgs>(args: SelectSubset<T, Documents_ProductsCreateArgs<ExtArgs>>): Prisma__Documents_ProductsClient<$Result.GetResult<Prisma.$Documents_ProductsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Documents_Products.
     * @param {Documents_ProductsCreateManyArgs} args - Arguments to create many Documents_Products.
     * @example
     * // Create many Documents_Products
     * const documents_Products = await prisma.documents_Products.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Documents_ProductsCreateManyArgs>(args?: SelectSubset<T, Documents_ProductsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Documents_Products and returns the data saved in the database.
     * @param {Documents_ProductsCreateManyAndReturnArgs} args - Arguments to create many Documents_Products.
     * @example
     * // Create many Documents_Products
     * const documents_Products = await prisma.documents_Products.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Documents_Products and only return the `documentProductId`
     * const documents_ProductsWithDocumentProductIdOnly = await prisma.documents_Products.createManyAndReturn({
     *   select: { documentProductId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Documents_ProductsCreateManyAndReturnArgs>(args?: SelectSubset<T, Documents_ProductsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Documents_ProductsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Documents_Products.
     * @param {Documents_ProductsDeleteArgs} args - Arguments to delete one Documents_Products.
     * @example
     * // Delete one Documents_Products
     * const Documents_Products = await prisma.documents_Products.delete({
     *   where: {
     *     // ... filter to delete one Documents_Products
     *   }
     * })
     * 
     */
    delete<T extends Documents_ProductsDeleteArgs>(args: SelectSubset<T, Documents_ProductsDeleteArgs<ExtArgs>>): Prisma__Documents_ProductsClient<$Result.GetResult<Prisma.$Documents_ProductsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Documents_Products.
     * @param {Documents_ProductsUpdateArgs} args - Arguments to update one Documents_Products.
     * @example
     * // Update one Documents_Products
     * const documents_Products = await prisma.documents_Products.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Documents_ProductsUpdateArgs>(args: SelectSubset<T, Documents_ProductsUpdateArgs<ExtArgs>>): Prisma__Documents_ProductsClient<$Result.GetResult<Prisma.$Documents_ProductsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Documents_Products.
     * @param {Documents_ProductsDeleteManyArgs} args - Arguments to filter Documents_Products to delete.
     * @example
     * // Delete a few Documents_Products
     * const { count } = await prisma.documents_Products.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Documents_ProductsDeleteManyArgs>(args?: SelectSubset<T, Documents_ProductsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Documents_Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Documents_ProductsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Documents_Products
     * const documents_Products = await prisma.documents_Products.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Documents_ProductsUpdateManyArgs>(args: SelectSubset<T, Documents_ProductsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Documents_Products and returns the data updated in the database.
     * @param {Documents_ProductsUpdateManyAndReturnArgs} args - Arguments to update many Documents_Products.
     * @example
     * // Update many Documents_Products
     * const documents_Products = await prisma.documents_Products.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Documents_Products and only return the `documentProductId`
     * const documents_ProductsWithDocumentProductIdOnly = await prisma.documents_Products.updateManyAndReturn({
     *   select: { documentProductId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends Documents_ProductsUpdateManyAndReturnArgs>(args: SelectSubset<T, Documents_ProductsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Documents_ProductsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Documents_Products.
     * @param {Documents_ProductsUpsertArgs} args - Arguments to update or create a Documents_Products.
     * @example
     * // Update or create a Documents_Products
     * const documents_Products = await prisma.documents_Products.upsert({
     *   create: {
     *     // ... data to create a Documents_Products
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Documents_Products we want to update
     *   }
     * })
     */
    upsert<T extends Documents_ProductsUpsertArgs>(args: SelectSubset<T, Documents_ProductsUpsertArgs<ExtArgs>>): Prisma__Documents_ProductsClient<$Result.GetResult<Prisma.$Documents_ProductsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Documents_Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Documents_ProductsCountArgs} args - Arguments to filter Documents_Products to count.
     * @example
     * // Count the number of Documents_Products
     * const count = await prisma.documents_Products.count({
     *   where: {
     *     // ... the filter for the Documents_Products we want to count
     *   }
     * })
    **/
    count<T extends Documents_ProductsCountArgs>(
      args?: Subset<T, Documents_ProductsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Documents_ProductsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Documents_Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Documents_ProductsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Documents_ProductsAggregateArgs>(args: Subset<T, Documents_ProductsAggregateArgs>): Prisma.PrismaPromise<GetDocuments_ProductsAggregateType<T>>

    /**
     * Group by Documents_Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Documents_ProductsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Documents_ProductsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Documents_ProductsGroupByArgs['orderBy'] }
        : { orderBy?: Documents_ProductsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Documents_ProductsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocuments_ProductsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Documents_Products model
   */
  readonly fields: Documents_ProductsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Documents_Products.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Documents_ProductsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Documents_Products model
   */
  interface Documents_ProductsFieldRefs {
    readonly documentProductId: FieldRef<"Documents_Products", 'String'>
    readonly documentId: FieldRef<"Documents_Products", 'Int'>
    readonly productId: FieldRef<"Documents_Products", 'Int'>
    readonly quantityExpected: FieldRef<"Documents_Products", 'Int'>
    readonly quantityChecked: FieldRef<"Documents_Products", 'Int'>
    readonly updatedAt: FieldRef<"Documents_Products", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Documents_Products findUnique
   */
  export type Documents_ProductsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documents_Products
     */
    select?: Documents_ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documents_Products
     */
    omit?: Documents_ProductsOmit<ExtArgs> | null
    /**
     * Filter, which Documents_Products to fetch.
     */
    where: Documents_ProductsWhereUniqueInput
  }

  /**
   * Documents_Products findUniqueOrThrow
   */
  export type Documents_ProductsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documents_Products
     */
    select?: Documents_ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documents_Products
     */
    omit?: Documents_ProductsOmit<ExtArgs> | null
    /**
     * Filter, which Documents_Products to fetch.
     */
    where: Documents_ProductsWhereUniqueInput
  }

  /**
   * Documents_Products findFirst
   */
  export type Documents_ProductsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documents_Products
     */
    select?: Documents_ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documents_Products
     */
    omit?: Documents_ProductsOmit<ExtArgs> | null
    /**
     * Filter, which Documents_Products to fetch.
     */
    where?: Documents_ProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents_Products to fetch.
     */
    orderBy?: Documents_ProductsOrderByWithRelationInput | Documents_ProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Documents_Products.
     */
    cursor?: Documents_ProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents_Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents_Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Documents_Products.
     */
    distinct?: Documents_ProductsScalarFieldEnum | Documents_ProductsScalarFieldEnum[]
  }

  /**
   * Documents_Products findFirstOrThrow
   */
  export type Documents_ProductsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documents_Products
     */
    select?: Documents_ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documents_Products
     */
    omit?: Documents_ProductsOmit<ExtArgs> | null
    /**
     * Filter, which Documents_Products to fetch.
     */
    where?: Documents_ProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents_Products to fetch.
     */
    orderBy?: Documents_ProductsOrderByWithRelationInput | Documents_ProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Documents_Products.
     */
    cursor?: Documents_ProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents_Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents_Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Documents_Products.
     */
    distinct?: Documents_ProductsScalarFieldEnum | Documents_ProductsScalarFieldEnum[]
  }

  /**
   * Documents_Products findMany
   */
  export type Documents_ProductsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documents_Products
     */
    select?: Documents_ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documents_Products
     */
    omit?: Documents_ProductsOmit<ExtArgs> | null
    /**
     * Filter, which Documents_Products to fetch.
     */
    where?: Documents_ProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents_Products to fetch.
     */
    orderBy?: Documents_ProductsOrderByWithRelationInput | Documents_ProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Documents_Products.
     */
    cursor?: Documents_ProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents_Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents_Products.
     */
    skip?: number
    distinct?: Documents_ProductsScalarFieldEnum | Documents_ProductsScalarFieldEnum[]
  }

  /**
   * Documents_Products create
   */
  export type Documents_ProductsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documents_Products
     */
    select?: Documents_ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documents_Products
     */
    omit?: Documents_ProductsOmit<ExtArgs> | null
    /**
     * The data needed to create a Documents_Products.
     */
    data: XOR<Documents_ProductsCreateInput, Documents_ProductsUncheckedCreateInput>
  }

  /**
   * Documents_Products createMany
   */
  export type Documents_ProductsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Documents_Products.
     */
    data: Documents_ProductsCreateManyInput | Documents_ProductsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Documents_Products createManyAndReturn
   */
  export type Documents_ProductsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documents_Products
     */
    select?: Documents_ProductsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Documents_Products
     */
    omit?: Documents_ProductsOmit<ExtArgs> | null
    /**
     * The data used to create many Documents_Products.
     */
    data: Documents_ProductsCreateManyInput | Documents_ProductsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Documents_Products update
   */
  export type Documents_ProductsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documents_Products
     */
    select?: Documents_ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documents_Products
     */
    omit?: Documents_ProductsOmit<ExtArgs> | null
    /**
     * The data needed to update a Documents_Products.
     */
    data: XOR<Documents_ProductsUpdateInput, Documents_ProductsUncheckedUpdateInput>
    /**
     * Choose, which Documents_Products to update.
     */
    where: Documents_ProductsWhereUniqueInput
  }

  /**
   * Documents_Products updateMany
   */
  export type Documents_ProductsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Documents_Products.
     */
    data: XOR<Documents_ProductsUpdateManyMutationInput, Documents_ProductsUncheckedUpdateManyInput>
    /**
     * Filter which Documents_Products to update
     */
    where?: Documents_ProductsWhereInput
    /**
     * Limit how many Documents_Products to update.
     */
    limit?: number
  }

  /**
   * Documents_Products updateManyAndReturn
   */
  export type Documents_ProductsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documents_Products
     */
    select?: Documents_ProductsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Documents_Products
     */
    omit?: Documents_ProductsOmit<ExtArgs> | null
    /**
     * The data used to update Documents_Products.
     */
    data: XOR<Documents_ProductsUpdateManyMutationInput, Documents_ProductsUncheckedUpdateManyInput>
    /**
     * Filter which Documents_Products to update
     */
    where?: Documents_ProductsWhereInput
    /**
     * Limit how many Documents_Products to update.
     */
    limit?: number
  }

  /**
   * Documents_Products upsert
   */
  export type Documents_ProductsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documents_Products
     */
    select?: Documents_ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documents_Products
     */
    omit?: Documents_ProductsOmit<ExtArgs> | null
    /**
     * The filter to search for the Documents_Products to update in case it exists.
     */
    where: Documents_ProductsWhereUniqueInput
    /**
     * In case the Documents_Products found by the `where` argument doesn't exist, create a new Documents_Products with this data.
     */
    create: XOR<Documents_ProductsCreateInput, Documents_ProductsUncheckedCreateInput>
    /**
     * In case the Documents_Products was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Documents_ProductsUpdateInput, Documents_ProductsUncheckedUpdateInput>
  }

  /**
   * Documents_Products delete
   */
  export type Documents_ProductsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documents_Products
     */
    select?: Documents_ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documents_Products
     */
    omit?: Documents_ProductsOmit<ExtArgs> | null
    /**
     * Filter which Documents_Products to delete.
     */
    where: Documents_ProductsWhereUniqueInput
  }

  /**
   * Documents_Products deleteMany
   */
  export type Documents_ProductsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Documents_Products to delete
     */
    where?: Documents_ProductsWhereInput
    /**
     * Limit how many Documents_Products to delete.
     */
    limit?: number
  }

  /**
   * Documents_Products without action
   */
  export type Documents_ProductsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documents_Products
     */
    select?: Documents_ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documents_Products
     */
    omit?: Documents_ProductsOmit<ExtArgs> | null
  }


  /**
   * Model Devices
   */

  export type AggregateDevices = {
    _count: DevicesCountAggregateOutputType | null
    _avg: DevicesAvgAggregateOutputType | null
    _sum: DevicesSumAggregateOutputType | null
    _min: DevicesMinAggregateOutputType | null
    _max: DevicesMaxAggregateOutputType | null
  }

  export type DevicesAvgAggregateOutputType = {
    deviceId: number | null
    organizationId: number | null
    assignedTo: number | null
  }

  export type DevicesSumAggregateOutputType = {
    deviceId: number | null
    organizationId: number | null
    assignedTo: number | null
  }

  export type DevicesMinAggregateOutputType = {
    deviceId: number | null
    organizationId: number | null
    deviceType: string | null
    deviceName: string | null
    qrToken: string | null
    assignedTo: number | null
    lastSynced: Date | null
    createdAt: Date | null
  }

  export type DevicesMaxAggregateOutputType = {
    deviceId: number | null
    organizationId: number | null
    deviceType: string | null
    deviceName: string | null
    qrToken: string | null
    assignedTo: number | null
    lastSynced: Date | null
    createdAt: Date | null
  }

  export type DevicesCountAggregateOutputType = {
    deviceId: number
    organizationId: number
    deviceType: number
    deviceName: number
    qrToken: number
    assignedTo: number
    lastSynced: number
    createdAt: number
    _all: number
  }


  export type DevicesAvgAggregateInputType = {
    deviceId?: true
    organizationId?: true
    assignedTo?: true
  }

  export type DevicesSumAggregateInputType = {
    deviceId?: true
    organizationId?: true
    assignedTo?: true
  }

  export type DevicesMinAggregateInputType = {
    deviceId?: true
    organizationId?: true
    deviceType?: true
    deviceName?: true
    qrToken?: true
    assignedTo?: true
    lastSynced?: true
    createdAt?: true
  }

  export type DevicesMaxAggregateInputType = {
    deviceId?: true
    organizationId?: true
    deviceType?: true
    deviceName?: true
    qrToken?: true
    assignedTo?: true
    lastSynced?: true
    createdAt?: true
  }

  export type DevicesCountAggregateInputType = {
    deviceId?: true
    organizationId?: true
    deviceType?: true
    deviceName?: true
    qrToken?: true
    assignedTo?: true
    lastSynced?: true
    createdAt?: true
    _all?: true
  }

  export type DevicesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Devices to aggregate.
     */
    where?: DevicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DevicesOrderByWithRelationInput | DevicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DevicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Devices
    **/
    _count?: true | DevicesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DevicesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DevicesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DevicesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DevicesMaxAggregateInputType
  }

  export type GetDevicesAggregateType<T extends DevicesAggregateArgs> = {
        [P in keyof T & keyof AggregateDevices]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDevices[P]>
      : GetScalarType<T[P], AggregateDevices[P]>
  }




  export type DevicesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DevicesWhereInput
    orderBy?: DevicesOrderByWithAggregationInput | DevicesOrderByWithAggregationInput[]
    by: DevicesScalarFieldEnum[] | DevicesScalarFieldEnum
    having?: DevicesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DevicesCountAggregateInputType | true
    _avg?: DevicesAvgAggregateInputType
    _sum?: DevicesSumAggregateInputType
    _min?: DevicesMinAggregateInputType
    _max?: DevicesMaxAggregateInputType
  }

  export type DevicesGroupByOutputType = {
    deviceId: number
    organizationId: number
    deviceType: string
    deviceName: string
    qrToken: string
    assignedTo: number
    lastSynced: Date
    createdAt: Date
    _count: DevicesCountAggregateOutputType | null
    _avg: DevicesAvgAggregateOutputType | null
    _sum: DevicesSumAggregateOutputType | null
    _min: DevicesMinAggregateOutputType | null
    _max: DevicesMaxAggregateOutputType | null
  }

  type GetDevicesGroupByPayload<T extends DevicesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DevicesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DevicesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DevicesGroupByOutputType[P]>
            : GetScalarType<T[P], DevicesGroupByOutputType[P]>
        }
      >
    >


  export type DevicesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    deviceId?: boolean
    organizationId?: boolean
    deviceType?: boolean
    deviceName?: boolean
    qrToken?: boolean
    assignedTo?: boolean
    lastSynced?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["devices"]>

  export type DevicesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    deviceId?: boolean
    organizationId?: boolean
    deviceType?: boolean
    deviceName?: boolean
    qrToken?: boolean
    assignedTo?: boolean
    lastSynced?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["devices"]>

  export type DevicesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    deviceId?: boolean
    organizationId?: boolean
    deviceType?: boolean
    deviceName?: boolean
    qrToken?: boolean
    assignedTo?: boolean
    lastSynced?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["devices"]>

  export type DevicesSelectScalar = {
    deviceId?: boolean
    organizationId?: boolean
    deviceType?: boolean
    deviceName?: boolean
    qrToken?: boolean
    assignedTo?: boolean
    lastSynced?: boolean
    createdAt?: boolean
  }

  export type DevicesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"deviceId" | "organizationId" | "deviceType" | "deviceName" | "qrToken" | "assignedTo" | "lastSynced" | "createdAt", ExtArgs["result"]["devices"]>

  export type $DevicesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Devices"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      deviceId: number
      organizationId: number
      deviceType: string
      deviceName: string
      qrToken: string
      assignedTo: number
      lastSynced: Date
      createdAt: Date
    }, ExtArgs["result"]["devices"]>
    composites: {}
  }

  type DevicesGetPayload<S extends boolean | null | undefined | DevicesDefaultArgs> = $Result.GetResult<Prisma.$DevicesPayload, S>

  type DevicesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DevicesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DevicesCountAggregateInputType | true
    }

  export interface DevicesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Devices'], meta: { name: 'Devices' } }
    /**
     * Find zero or one Devices that matches the filter.
     * @param {DevicesFindUniqueArgs} args - Arguments to find a Devices
     * @example
     * // Get one Devices
     * const devices = await prisma.devices.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DevicesFindUniqueArgs>(args: SelectSubset<T, DevicesFindUniqueArgs<ExtArgs>>): Prisma__DevicesClient<$Result.GetResult<Prisma.$DevicesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Devices that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DevicesFindUniqueOrThrowArgs} args - Arguments to find a Devices
     * @example
     * // Get one Devices
     * const devices = await prisma.devices.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DevicesFindUniqueOrThrowArgs>(args: SelectSubset<T, DevicesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DevicesClient<$Result.GetResult<Prisma.$DevicesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Devices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DevicesFindFirstArgs} args - Arguments to find a Devices
     * @example
     * // Get one Devices
     * const devices = await prisma.devices.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DevicesFindFirstArgs>(args?: SelectSubset<T, DevicesFindFirstArgs<ExtArgs>>): Prisma__DevicesClient<$Result.GetResult<Prisma.$DevicesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Devices that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DevicesFindFirstOrThrowArgs} args - Arguments to find a Devices
     * @example
     * // Get one Devices
     * const devices = await prisma.devices.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DevicesFindFirstOrThrowArgs>(args?: SelectSubset<T, DevicesFindFirstOrThrowArgs<ExtArgs>>): Prisma__DevicesClient<$Result.GetResult<Prisma.$DevicesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Devices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DevicesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Devices
     * const devices = await prisma.devices.findMany()
     * 
     * // Get first 10 Devices
     * const devices = await prisma.devices.findMany({ take: 10 })
     * 
     * // Only select the `deviceId`
     * const devicesWithDeviceIdOnly = await prisma.devices.findMany({ select: { deviceId: true } })
     * 
     */
    findMany<T extends DevicesFindManyArgs>(args?: SelectSubset<T, DevicesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevicesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Devices.
     * @param {DevicesCreateArgs} args - Arguments to create a Devices.
     * @example
     * // Create one Devices
     * const Devices = await prisma.devices.create({
     *   data: {
     *     // ... data to create a Devices
     *   }
     * })
     * 
     */
    create<T extends DevicesCreateArgs>(args: SelectSubset<T, DevicesCreateArgs<ExtArgs>>): Prisma__DevicesClient<$Result.GetResult<Prisma.$DevicesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Devices.
     * @param {DevicesCreateManyArgs} args - Arguments to create many Devices.
     * @example
     * // Create many Devices
     * const devices = await prisma.devices.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DevicesCreateManyArgs>(args?: SelectSubset<T, DevicesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Devices and returns the data saved in the database.
     * @param {DevicesCreateManyAndReturnArgs} args - Arguments to create many Devices.
     * @example
     * // Create many Devices
     * const devices = await prisma.devices.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Devices and only return the `deviceId`
     * const devicesWithDeviceIdOnly = await prisma.devices.createManyAndReturn({
     *   select: { deviceId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DevicesCreateManyAndReturnArgs>(args?: SelectSubset<T, DevicesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevicesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Devices.
     * @param {DevicesDeleteArgs} args - Arguments to delete one Devices.
     * @example
     * // Delete one Devices
     * const Devices = await prisma.devices.delete({
     *   where: {
     *     // ... filter to delete one Devices
     *   }
     * })
     * 
     */
    delete<T extends DevicesDeleteArgs>(args: SelectSubset<T, DevicesDeleteArgs<ExtArgs>>): Prisma__DevicesClient<$Result.GetResult<Prisma.$DevicesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Devices.
     * @param {DevicesUpdateArgs} args - Arguments to update one Devices.
     * @example
     * // Update one Devices
     * const devices = await prisma.devices.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DevicesUpdateArgs>(args: SelectSubset<T, DevicesUpdateArgs<ExtArgs>>): Prisma__DevicesClient<$Result.GetResult<Prisma.$DevicesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Devices.
     * @param {DevicesDeleteManyArgs} args - Arguments to filter Devices to delete.
     * @example
     * // Delete a few Devices
     * const { count } = await prisma.devices.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DevicesDeleteManyArgs>(args?: SelectSubset<T, DevicesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Devices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DevicesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Devices
     * const devices = await prisma.devices.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DevicesUpdateManyArgs>(args: SelectSubset<T, DevicesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Devices and returns the data updated in the database.
     * @param {DevicesUpdateManyAndReturnArgs} args - Arguments to update many Devices.
     * @example
     * // Update many Devices
     * const devices = await prisma.devices.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Devices and only return the `deviceId`
     * const devicesWithDeviceIdOnly = await prisma.devices.updateManyAndReturn({
     *   select: { deviceId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DevicesUpdateManyAndReturnArgs>(args: SelectSubset<T, DevicesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevicesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Devices.
     * @param {DevicesUpsertArgs} args - Arguments to update or create a Devices.
     * @example
     * // Update or create a Devices
     * const devices = await prisma.devices.upsert({
     *   create: {
     *     // ... data to create a Devices
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Devices we want to update
     *   }
     * })
     */
    upsert<T extends DevicesUpsertArgs>(args: SelectSubset<T, DevicesUpsertArgs<ExtArgs>>): Prisma__DevicesClient<$Result.GetResult<Prisma.$DevicesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Devices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DevicesCountArgs} args - Arguments to filter Devices to count.
     * @example
     * // Count the number of Devices
     * const count = await prisma.devices.count({
     *   where: {
     *     // ... the filter for the Devices we want to count
     *   }
     * })
    **/
    count<T extends DevicesCountArgs>(
      args?: Subset<T, DevicesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DevicesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Devices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DevicesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DevicesAggregateArgs>(args: Subset<T, DevicesAggregateArgs>): Prisma.PrismaPromise<GetDevicesAggregateType<T>>

    /**
     * Group by Devices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DevicesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DevicesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DevicesGroupByArgs['orderBy'] }
        : { orderBy?: DevicesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DevicesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDevicesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Devices model
   */
  readonly fields: DevicesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Devices.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DevicesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Devices model
   */
  interface DevicesFieldRefs {
    readonly deviceId: FieldRef<"Devices", 'Int'>
    readonly organizationId: FieldRef<"Devices", 'Int'>
    readonly deviceType: FieldRef<"Devices", 'String'>
    readonly deviceName: FieldRef<"Devices", 'String'>
    readonly qrToken: FieldRef<"Devices", 'String'>
    readonly assignedTo: FieldRef<"Devices", 'Int'>
    readonly lastSynced: FieldRef<"Devices", 'DateTime'>
    readonly createdAt: FieldRef<"Devices", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Devices findUnique
   */
  export type DevicesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Devices
     */
    select?: DevicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Devices
     */
    omit?: DevicesOmit<ExtArgs> | null
    /**
     * Filter, which Devices to fetch.
     */
    where: DevicesWhereUniqueInput
  }

  /**
   * Devices findUniqueOrThrow
   */
  export type DevicesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Devices
     */
    select?: DevicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Devices
     */
    omit?: DevicesOmit<ExtArgs> | null
    /**
     * Filter, which Devices to fetch.
     */
    where: DevicesWhereUniqueInput
  }

  /**
   * Devices findFirst
   */
  export type DevicesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Devices
     */
    select?: DevicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Devices
     */
    omit?: DevicesOmit<ExtArgs> | null
    /**
     * Filter, which Devices to fetch.
     */
    where?: DevicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DevicesOrderByWithRelationInput | DevicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Devices.
     */
    cursor?: DevicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Devices.
     */
    distinct?: DevicesScalarFieldEnum | DevicesScalarFieldEnum[]
  }

  /**
   * Devices findFirstOrThrow
   */
  export type DevicesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Devices
     */
    select?: DevicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Devices
     */
    omit?: DevicesOmit<ExtArgs> | null
    /**
     * Filter, which Devices to fetch.
     */
    where?: DevicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DevicesOrderByWithRelationInput | DevicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Devices.
     */
    cursor?: DevicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Devices.
     */
    distinct?: DevicesScalarFieldEnum | DevicesScalarFieldEnum[]
  }

  /**
   * Devices findMany
   */
  export type DevicesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Devices
     */
    select?: DevicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Devices
     */
    omit?: DevicesOmit<ExtArgs> | null
    /**
     * Filter, which Devices to fetch.
     */
    where?: DevicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DevicesOrderByWithRelationInput | DevicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Devices.
     */
    cursor?: DevicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    distinct?: DevicesScalarFieldEnum | DevicesScalarFieldEnum[]
  }

  /**
   * Devices create
   */
  export type DevicesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Devices
     */
    select?: DevicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Devices
     */
    omit?: DevicesOmit<ExtArgs> | null
    /**
     * The data needed to create a Devices.
     */
    data: XOR<DevicesCreateInput, DevicesUncheckedCreateInput>
  }

  /**
   * Devices createMany
   */
  export type DevicesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Devices.
     */
    data: DevicesCreateManyInput | DevicesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Devices createManyAndReturn
   */
  export type DevicesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Devices
     */
    select?: DevicesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Devices
     */
    omit?: DevicesOmit<ExtArgs> | null
    /**
     * The data used to create many Devices.
     */
    data: DevicesCreateManyInput | DevicesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Devices update
   */
  export type DevicesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Devices
     */
    select?: DevicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Devices
     */
    omit?: DevicesOmit<ExtArgs> | null
    /**
     * The data needed to update a Devices.
     */
    data: XOR<DevicesUpdateInput, DevicesUncheckedUpdateInput>
    /**
     * Choose, which Devices to update.
     */
    where: DevicesWhereUniqueInput
  }

  /**
   * Devices updateMany
   */
  export type DevicesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Devices.
     */
    data: XOR<DevicesUpdateManyMutationInput, DevicesUncheckedUpdateManyInput>
    /**
     * Filter which Devices to update
     */
    where?: DevicesWhereInput
    /**
     * Limit how many Devices to update.
     */
    limit?: number
  }

  /**
   * Devices updateManyAndReturn
   */
  export type DevicesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Devices
     */
    select?: DevicesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Devices
     */
    omit?: DevicesOmit<ExtArgs> | null
    /**
     * The data used to update Devices.
     */
    data: XOR<DevicesUpdateManyMutationInput, DevicesUncheckedUpdateManyInput>
    /**
     * Filter which Devices to update
     */
    where?: DevicesWhereInput
    /**
     * Limit how many Devices to update.
     */
    limit?: number
  }

  /**
   * Devices upsert
   */
  export type DevicesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Devices
     */
    select?: DevicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Devices
     */
    omit?: DevicesOmit<ExtArgs> | null
    /**
     * The filter to search for the Devices to update in case it exists.
     */
    where: DevicesWhereUniqueInput
    /**
     * In case the Devices found by the `where` argument doesn't exist, create a new Devices with this data.
     */
    create: XOR<DevicesCreateInput, DevicesUncheckedCreateInput>
    /**
     * In case the Devices was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DevicesUpdateInput, DevicesUncheckedUpdateInput>
  }

  /**
   * Devices delete
   */
  export type DevicesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Devices
     */
    select?: DevicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Devices
     */
    omit?: DevicesOmit<ExtArgs> | null
    /**
     * Filter which Devices to delete.
     */
    where: DevicesWhereUniqueInput
  }

  /**
   * Devices deleteMany
   */
  export type DevicesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Devices to delete
     */
    where?: DevicesWhereInput
    /**
     * Limit how many Devices to delete.
     */
    limit?: number
  }

  /**
   * Devices without action
   */
  export type DevicesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Devices
     */
    select?: DevicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Devices
     */
    omit?: DevicesOmit<ExtArgs> | null
  }


  /**
   * Model Scan_events
   */

  export type AggregateScan_events = {
    _count: Scan_eventsCountAggregateOutputType | null
    _avg: Scan_eventsAvgAggregateOutputType | null
    _sum: Scan_eventsSumAggregateOutputType | null
    _min: Scan_eventsMinAggregateOutputType | null
    _max: Scan_eventsMaxAggregateOutputType | null
  }

  export type Scan_eventsAvgAggregateOutputType = {
    scanEventId: number | null
    documentId: number | null
    productId: number | null
    userId: number | null
    deviceId: number | null
    quantityDelta: number | null
  }

  export type Scan_eventsSumAggregateOutputType = {
    scanEventId: number | null
    documentId: number | null
    productId: number | null
    userId: number | null
    deviceId: number | null
    quantityDelta: number | null
  }

  export type Scan_eventsMinAggregateOutputType = {
    scanEventId: number | null
    documentId: number | null
    productId: number | null
    userId: number | null
    deviceId: number | null
    quantityDelta: number | null
    scannedAt: Date | null
    synced: boolean | null
  }

  export type Scan_eventsMaxAggregateOutputType = {
    scanEventId: number | null
    documentId: number | null
    productId: number | null
    userId: number | null
    deviceId: number | null
    quantityDelta: number | null
    scannedAt: Date | null
    synced: boolean | null
  }

  export type Scan_eventsCountAggregateOutputType = {
    scanEventId: number
    documentId: number
    productId: number
    userId: number
    deviceId: number
    quantityDelta: number
    scannedAt: number
    synced: number
    _all: number
  }


  export type Scan_eventsAvgAggregateInputType = {
    scanEventId?: true
    documentId?: true
    productId?: true
    userId?: true
    deviceId?: true
    quantityDelta?: true
  }

  export type Scan_eventsSumAggregateInputType = {
    scanEventId?: true
    documentId?: true
    productId?: true
    userId?: true
    deviceId?: true
    quantityDelta?: true
  }

  export type Scan_eventsMinAggregateInputType = {
    scanEventId?: true
    documentId?: true
    productId?: true
    userId?: true
    deviceId?: true
    quantityDelta?: true
    scannedAt?: true
    synced?: true
  }

  export type Scan_eventsMaxAggregateInputType = {
    scanEventId?: true
    documentId?: true
    productId?: true
    userId?: true
    deviceId?: true
    quantityDelta?: true
    scannedAt?: true
    synced?: true
  }

  export type Scan_eventsCountAggregateInputType = {
    scanEventId?: true
    documentId?: true
    productId?: true
    userId?: true
    deviceId?: true
    quantityDelta?: true
    scannedAt?: true
    synced?: true
    _all?: true
  }

  export type Scan_eventsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Scan_events to aggregate.
     */
    where?: Scan_eventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scan_events to fetch.
     */
    orderBy?: Scan_eventsOrderByWithRelationInput | Scan_eventsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Scan_eventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scan_events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scan_events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Scan_events
    **/
    _count?: true | Scan_eventsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Scan_eventsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Scan_eventsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Scan_eventsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Scan_eventsMaxAggregateInputType
  }

  export type GetScan_eventsAggregateType<T extends Scan_eventsAggregateArgs> = {
        [P in keyof T & keyof AggregateScan_events]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateScan_events[P]>
      : GetScalarType<T[P], AggregateScan_events[P]>
  }




  export type Scan_eventsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Scan_eventsWhereInput
    orderBy?: Scan_eventsOrderByWithAggregationInput | Scan_eventsOrderByWithAggregationInput[]
    by: Scan_eventsScalarFieldEnum[] | Scan_eventsScalarFieldEnum
    having?: Scan_eventsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Scan_eventsCountAggregateInputType | true
    _avg?: Scan_eventsAvgAggregateInputType
    _sum?: Scan_eventsSumAggregateInputType
    _min?: Scan_eventsMinAggregateInputType
    _max?: Scan_eventsMaxAggregateInputType
  }

  export type Scan_eventsGroupByOutputType = {
    scanEventId: number
    documentId: number
    productId: number
    userId: number
    deviceId: number
    quantityDelta: number
    scannedAt: Date
    synced: boolean
    _count: Scan_eventsCountAggregateOutputType | null
    _avg: Scan_eventsAvgAggregateOutputType | null
    _sum: Scan_eventsSumAggregateOutputType | null
    _min: Scan_eventsMinAggregateOutputType | null
    _max: Scan_eventsMaxAggregateOutputType | null
  }

  type GetScan_eventsGroupByPayload<T extends Scan_eventsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Scan_eventsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Scan_eventsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Scan_eventsGroupByOutputType[P]>
            : GetScalarType<T[P], Scan_eventsGroupByOutputType[P]>
        }
      >
    >


  export type Scan_eventsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    scanEventId?: boolean
    documentId?: boolean
    productId?: boolean
    userId?: boolean
    deviceId?: boolean
    quantityDelta?: boolean
    scannedAt?: boolean
    synced?: boolean
  }, ExtArgs["result"]["scan_events"]>

  export type Scan_eventsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    scanEventId?: boolean
    documentId?: boolean
    productId?: boolean
    userId?: boolean
    deviceId?: boolean
    quantityDelta?: boolean
    scannedAt?: boolean
    synced?: boolean
  }, ExtArgs["result"]["scan_events"]>

  export type Scan_eventsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    scanEventId?: boolean
    documentId?: boolean
    productId?: boolean
    userId?: boolean
    deviceId?: boolean
    quantityDelta?: boolean
    scannedAt?: boolean
    synced?: boolean
  }, ExtArgs["result"]["scan_events"]>

  export type Scan_eventsSelectScalar = {
    scanEventId?: boolean
    documentId?: boolean
    productId?: boolean
    userId?: boolean
    deviceId?: boolean
    quantityDelta?: boolean
    scannedAt?: boolean
    synced?: boolean
  }

  export type Scan_eventsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"scanEventId" | "documentId" | "productId" | "userId" | "deviceId" | "quantityDelta" | "scannedAt" | "synced", ExtArgs["result"]["scan_events"]>

  export type $Scan_eventsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Scan_events"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      scanEventId: number
      documentId: number
      productId: number
      userId: number
      deviceId: number
      quantityDelta: number
      scannedAt: Date
      synced: boolean
    }, ExtArgs["result"]["scan_events"]>
    composites: {}
  }

  type Scan_eventsGetPayload<S extends boolean | null | undefined | Scan_eventsDefaultArgs> = $Result.GetResult<Prisma.$Scan_eventsPayload, S>

  type Scan_eventsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Scan_eventsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Scan_eventsCountAggregateInputType | true
    }

  export interface Scan_eventsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Scan_events'], meta: { name: 'Scan_events' } }
    /**
     * Find zero or one Scan_events that matches the filter.
     * @param {Scan_eventsFindUniqueArgs} args - Arguments to find a Scan_events
     * @example
     * // Get one Scan_events
     * const scan_events = await prisma.scan_events.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Scan_eventsFindUniqueArgs>(args: SelectSubset<T, Scan_eventsFindUniqueArgs<ExtArgs>>): Prisma__Scan_eventsClient<$Result.GetResult<Prisma.$Scan_eventsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Scan_events that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Scan_eventsFindUniqueOrThrowArgs} args - Arguments to find a Scan_events
     * @example
     * // Get one Scan_events
     * const scan_events = await prisma.scan_events.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Scan_eventsFindUniqueOrThrowArgs>(args: SelectSubset<T, Scan_eventsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Scan_eventsClient<$Result.GetResult<Prisma.$Scan_eventsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Scan_events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Scan_eventsFindFirstArgs} args - Arguments to find a Scan_events
     * @example
     * // Get one Scan_events
     * const scan_events = await prisma.scan_events.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Scan_eventsFindFirstArgs>(args?: SelectSubset<T, Scan_eventsFindFirstArgs<ExtArgs>>): Prisma__Scan_eventsClient<$Result.GetResult<Prisma.$Scan_eventsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Scan_events that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Scan_eventsFindFirstOrThrowArgs} args - Arguments to find a Scan_events
     * @example
     * // Get one Scan_events
     * const scan_events = await prisma.scan_events.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Scan_eventsFindFirstOrThrowArgs>(args?: SelectSubset<T, Scan_eventsFindFirstOrThrowArgs<ExtArgs>>): Prisma__Scan_eventsClient<$Result.GetResult<Prisma.$Scan_eventsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Scan_events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Scan_eventsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Scan_events
     * const scan_events = await prisma.scan_events.findMany()
     * 
     * // Get first 10 Scan_events
     * const scan_events = await prisma.scan_events.findMany({ take: 10 })
     * 
     * // Only select the `scanEventId`
     * const scan_eventsWithScanEventIdOnly = await prisma.scan_events.findMany({ select: { scanEventId: true } })
     * 
     */
    findMany<T extends Scan_eventsFindManyArgs>(args?: SelectSubset<T, Scan_eventsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Scan_eventsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Scan_events.
     * @param {Scan_eventsCreateArgs} args - Arguments to create a Scan_events.
     * @example
     * // Create one Scan_events
     * const Scan_events = await prisma.scan_events.create({
     *   data: {
     *     // ... data to create a Scan_events
     *   }
     * })
     * 
     */
    create<T extends Scan_eventsCreateArgs>(args: SelectSubset<T, Scan_eventsCreateArgs<ExtArgs>>): Prisma__Scan_eventsClient<$Result.GetResult<Prisma.$Scan_eventsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Scan_events.
     * @param {Scan_eventsCreateManyArgs} args - Arguments to create many Scan_events.
     * @example
     * // Create many Scan_events
     * const scan_events = await prisma.scan_events.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Scan_eventsCreateManyArgs>(args?: SelectSubset<T, Scan_eventsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Scan_events and returns the data saved in the database.
     * @param {Scan_eventsCreateManyAndReturnArgs} args - Arguments to create many Scan_events.
     * @example
     * // Create many Scan_events
     * const scan_events = await prisma.scan_events.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Scan_events and only return the `scanEventId`
     * const scan_eventsWithScanEventIdOnly = await prisma.scan_events.createManyAndReturn({
     *   select: { scanEventId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Scan_eventsCreateManyAndReturnArgs>(args?: SelectSubset<T, Scan_eventsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Scan_eventsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Scan_events.
     * @param {Scan_eventsDeleteArgs} args - Arguments to delete one Scan_events.
     * @example
     * // Delete one Scan_events
     * const Scan_events = await prisma.scan_events.delete({
     *   where: {
     *     // ... filter to delete one Scan_events
     *   }
     * })
     * 
     */
    delete<T extends Scan_eventsDeleteArgs>(args: SelectSubset<T, Scan_eventsDeleteArgs<ExtArgs>>): Prisma__Scan_eventsClient<$Result.GetResult<Prisma.$Scan_eventsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Scan_events.
     * @param {Scan_eventsUpdateArgs} args - Arguments to update one Scan_events.
     * @example
     * // Update one Scan_events
     * const scan_events = await prisma.scan_events.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Scan_eventsUpdateArgs>(args: SelectSubset<T, Scan_eventsUpdateArgs<ExtArgs>>): Prisma__Scan_eventsClient<$Result.GetResult<Prisma.$Scan_eventsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Scan_events.
     * @param {Scan_eventsDeleteManyArgs} args - Arguments to filter Scan_events to delete.
     * @example
     * // Delete a few Scan_events
     * const { count } = await prisma.scan_events.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Scan_eventsDeleteManyArgs>(args?: SelectSubset<T, Scan_eventsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Scan_events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Scan_eventsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Scan_events
     * const scan_events = await prisma.scan_events.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Scan_eventsUpdateManyArgs>(args: SelectSubset<T, Scan_eventsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Scan_events and returns the data updated in the database.
     * @param {Scan_eventsUpdateManyAndReturnArgs} args - Arguments to update many Scan_events.
     * @example
     * // Update many Scan_events
     * const scan_events = await prisma.scan_events.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Scan_events and only return the `scanEventId`
     * const scan_eventsWithScanEventIdOnly = await prisma.scan_events.updateManyAndReturn({
     *   select: { scanEventId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends Scan_eventsUpdateManyAndReturnArgs>(args: SelectSubset<T, Scan_eventsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Scan_eventsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Scan_events.
     * @param {Scan_eventsUpsertArgs} args - Arguments to update or create a Scan_events.
     * @example
     * // Update or create a Scan_events
     * const scan_events = await prisma.scan_events.upsert({
     *   create: {
     *     // ... data to create a Scan_events
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Scan_events we want to update
     *   }
     * })
     */
    upsert<T extends Scan_eventsUpsertArgs>(args: SelectSubset<T, Scan_eventsUpsertArgs<ExtArgs>>): Prisma__Scan_eventsClient<$Result.GetResult<Prisma.$Scan_eventsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Scan_events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Scan_eventsCountArgs} args - Arguments to filter Scan_events to count.
     * @example
     * // Count the number of Scan_events
     * const count = await prisma.scan_events.count({
     *   where: {
     *     // ... the filter for the Scan_events we want to count
     *   }
     * })
    **/
    count<T extends Scan_eventsCountArgs>(
      args?: Subset<T, Scan_eventsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Scan_eventsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Scan_events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Scan_eventsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Scan_eventsAggregateArgs>(args: Subset<T, Scan_eventsAggregateArgs>): Prisma.PrismaPromise<GetScan_eventsAggregateType<T>>

    /**
     * Group by Scan_events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Scan_eventsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Scan_eventsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Scan_eventsGroupByArgs['orderBy'] }
        : { orderBy?: Scan_eventsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Scan_eventsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScan_eventsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Scan_events model
   */
  readonly fields: Scan_eventsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Scan_events.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Scan_eventsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Scan_events model
   */
  interface Scan_eventsFieldRefs {
    readonly scanEventId: FieldRef<"Scan_events", 'Int'>
    readonly documentId: FieldRef<"Scan_events", 'Int'>
    readonly productId: FieldRef<"Scan_events", 'Int'>
    readonly userId: FieldRef<"Scan_events", 'Int'>
    readonly deviceId: FieldRef<"Scan_events", 'Int'>
    readonly quantityDelta: FieldRef<"Scan_events", 'Int'>
    readonly scannedAt: FieldRef<"Scan_events", 'DateTime'>
    readonly synced: FieldRef<"Scan_events", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Scan_events findUnique
   */
  export type Scan_eventsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scan_events
     */
    select?: Scan_eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scan_events
     */
    omit?: Scan_eventsOmit<ExtArgs> | null
    /**
     * Filter, which Scan_events to fetch.
     */
    where: Scan_eventsWhereUniqueInput
  }

  /**
   * Scan_events findUniqueOrThrow
   */
  export type Scan_eventsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scan_events
     */
    select?: Scan_eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scan_events
     */
    omit?: Scan_eventsOmit<ExtArgs> | null
    /**
     * Filter, which Scan_events to fetch.
     */
    where: Scan_eventsWhereUniqueInput
  }

  /**
   * Scan_events findFirst
   */
  export type Scan_eventsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scan_events
     */
    select?: Scan_eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scan_events
     */
    omit?: Scan_eventsOmit<ExtArgs> | null
    /**
     * Filter, which Scan_events to fetch.
     */
    where?: Scan_eventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scan_events to fetch.
     */
    orderBy?: Scan_eventsOrderByWithRelationInput | Scan_eventsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Scan_events.
     */
    cursor?: Scan_eventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scan_events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scan_events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Scan_events.
     */
    distinct?: Scan_eventsScalarFieldEnum | Scan_eventsScalarFieldEnum[]
  }

  /**
   * Scan_events findFirstOrThrow
   */
  export type Scan_eventsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scan_events
     */
    select?: Scan_eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scan_events
     */
    omit?: Scan_eventsOmit<ExtArgs> | null
    /**
     * Filter, which Scan_events to fetch.
     */
    where?: Scan_eventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scan_events to fetch.
     */
    orderBy?: Scan_eventsOrderByWithRelationInput | Scan_eventsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Scan_events.
     */
    cursor?: Scan_eventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scan_events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scan_events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Scan_events.
     */
    distinct?: Scan_eventsScalarFieldEnum | Scan_eventsScalarFieldEnum[]
  }

  /**
   * Scan_events findMany
   */
  export type Scan_eventsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scan_events
     */
    select?: Scan_eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scan_events
     */
    omit?: Scan_eventsOmit<ExtArgs> | null
    /**
     * Filter, which Scan_events to fetch.
     */
    where?: Scan_eventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scan_events to fetch.
     */
    orderBy?: Scan_eventsOrderByWithRelationInput | Scan_eventsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Scan_events.
     */
    cursor?: Scan_eventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scan_events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scan_events.
     */
    skip?: number
    distinct?: Scan_eventsScalarFieldEnum | Scan_eventsScalarFieldEnum[]
  }

  /**
   * Scan_events create
   */
  export type Scan_eventsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scan_events
     */
    select?: Scan_eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scan_events
     */
    omit?: Scan_eventsOmit<ExtArgs> | null
    /**
     * The data needed to create a Scan_events.
     */
    data: XOR<Scan_eventsCreateInput, Scan_eventsUncheckedCreateInput>
  }

  /**
   * Scan_events createMany
   */
  export type Scan_eventsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Scan_events.
     */
    data: Scan_eventsCreateManyInput | Scan_eventsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Scan_events createManyAndReturn
   */
  export type Scan_eventsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scan_events
     */
    select?: Scan_eventsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Scan_events
     */
    omit?: Scan_eventsOmit<ExtArgs> | null
    /**
     * The data used to create many Scan_events.
     */
    data: Scan_eventsCreateManyInput | Scan_eventsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Scan_events update
   */
  export type Scan_eventsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scan_events
     */
    select?: Scan_eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scan_events
     */
    omit?: Scan_eventsOmit<ExtArgs> | null
    /**
     * The data needed to update a Scan_events.
     */
    data: XOR<Scan_eventsUpdateInput, Scan_eventsUncheckedUpdateInput>
    /**
     * Choose, which Scan_events to update.
     */
    where: Scan_eventsWhereUniqueInput
  }

  /**
   * Scan_events updateMany
   */
  export type Scan_eventsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Scan_events.
     */
    data: XOR<Scan_eventsUpdateManyMutationInput, Scan_eventsUncheckedUpdateManyInput>
    /**
     * Filter which Scan_events to update
     */
    where?: Scan_eventsWhereInput
    /**
     * Limit how many Scan_events to update.
     */
    limit?: number
  }

  /**
   * Scan_events updateManyAndReturn
   */
  export type Scan_eventsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scan_events
     */
    select?: Scan_eventsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Scan_events
     */
    omit?: Scan_eventsOmit<ExtArgs> | null
    /**
     * The data used to update Scan_events.
     */
    data: XOR<Scan_eventsUpdateManyMutationInput, Scan_eventsUncheckedUpdateManyInput>
    /**
     * Filter which Scan_events to update
     */
    where?: Scan_eventsWhereInput
    /**
     * Limit how many Scan_events to update.
     */
    limit?: number
  }

  /**
   * Scan_events upsert
   */
  export type Scan_eventsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scan_events
     */
    select?: Scan_eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scan_events
     */
    omit?: Scan_eventsOmit<ExtArgs> | null
    /**
     * The filter to search for the Scan_events to update in case it exists.
     */
    where: Scan_eventsWhereUniqueInput
    /**
     * In case the Scan_events found by the `where` argument doesn't exist, create a new Scan_events with this data.
     */
    create: XOR<Scan_eventsCreateInput, Scan_eventsUncheckedCreateInput>
    /**
     * In case the Scan_events was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Scan_eventsUpdateInput, Scan_eventsUncheckedUpdateInput>
  }

  /**
   * Scan_events delete
   */
  export type Scan_eventsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scan_events
     */
    select?: Scan_eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scan_events
     */
    omit?: Scan_eventsOmit<ExtArgs> | null
    /**
     * Filter which Scan_events to delete.
     */
    where: Scan_eventsWhereUniqueInput
  }

  /**
   * Scan_events deleteMany
   */
  export type Scan_eventsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Scan_events to delete
     */
    where?: Scan_eventsWhereInput
    /**
     * Limit how many Scan_events to delete.
     */
    limit?: number
  }

  /**
   * Scan_events without action
   */
  export type Scan_eventsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scan_events
     */
    select?: Scan_eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scan_events
     */
    omit?: Scan_eventsOmit<ExtArgs> | null
  }


  /**
   * Model Sync_logs
   */

  export type AggregateSync_logs = {
    _count: Sync_logsCountAggregateOutputType | null
    _avg: Sync_logsAvgAggregateOutputType | null
    _sum: Sync_logsSumAggregateOutputType | null
    _min: Sync_logsMinAggregateOutputType | null
    _max: Sync_logsMaxAggregateOutputType | null
  }

  export type Sync_logsAvgAggregateOutputType = {
    syncLogId: number | null
    deviceId: number | null
  }

  export type Sync_logsSumAggregateOutputType = {
    syncLogId: number | null
    deviceId: number | null
  }

  export type Sync_logsMinAggregateOutputType = {
    syncLogId: number | null
    deviceId: number | null
    direction: string | null
    success: boolean | null
    syncTime: Date | null
  }

  export type Sync_logsMaxAggregateOutputType = {
    syncLogId: number | null
    deviceId: number | null
    direction: string | null
    success: boolean | null
    syncTime: Date | null
  }

  export type Sync_logsCountAggregateOutputType = {
    syncLogId: number
    deviceId: number
    direction: number
    success: number
    syncTime: number
    _all: number
  }


  export type Sync_logsAvgAggregateInputType = {
    syncLogId?: true
    deviceId?: true
  }

  export type Sync_logsSumAggregateInputType = {
    syncLogId?: true
    deviceId?: true
  }

  export type Sync_logsMinAggregateInputType = {
    syncLogId?: true
    deviceId?: true
    direction?: true
    success?: true
    syncTime?: true
  }

  export type Sync_logsMaxAggregateInputType = {
    syncLogId?: true
    deviceId?: true
    direction?: true
    success?: true
    syncTime?: true
  }

  export type Sync_logsCountAggregateInputType = {
    syncLogId?: true
    deviceId?: true
    direction?: true
    success?: true
    syncTime?: true
    _all?: true
  }

  export type Sync_logsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sync_logs to aggregate.
     */
    where?: Sync_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sync_logs to fetch.
     */
    orderBy?: Sync_logsOrderByWithRelationInput | Sync_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Sync_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sync_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sync_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sync_logs
    **/
    _count?: true | Sync_logsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Sync_logsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Sync_logsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Sync_logsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Sync_logsMaxAggregateInputType
  }

  export type GetSync_logsAggregateType<T extends Sync_logsAggregateArgs> = {
        [P in keyof T & keyof AggregateSync_logs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSync_logs[P]>
      : GetScalarType<T[P], AggregateSync_logs[P]>
  }




  export type Sync_logsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Sync_logsWhereInput
    orderBy?: Sync_logsOrderByWithAggregationInput | Sync_logsOrderByWithAggregationInput[]
    by: Sync_logsScalarFieldEnum[] | Sync_logsScalarFieldEnum
    having?: Sync_logsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Sync_logsCountAggregateInputType | true
    _avg?: Sync_logsAvgAggregateInputType
    _sum?: Sync_logsSumAggregateInputType
    _min?: Sync_logsMinAggregateInputType
    _max?: Sync_logsMaxAggregateInputType
  }

  export type Sync_logsGroupByOutputType = {
    syncLogId: number
    deviceId: number
    direction: string
    success: boolean
    syncTime: Date
    _count: Sync_logsCountAggregateOutputType | null
    _avg: Sync_logsAvgAggregateOutputType | null
    _sum: Sync_logsSumAggregateOutputType | null
    _min: Sync_logsMinAggregateOutputType | null
    _max: Sync_logsMaxAggregateOutputType | null
  }

  type GetSync_logsGroupByPayload<T extends Sync_logsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Sync_logsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Sync_logsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Sync_logsGroupByOutputType[P]>
            : GetScalarType<T[P], Sync_logsGroupByOutputType[P]>
        }
      >
    >


  export type Sync_logsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    syncLogId?: boolean
    deviceId?: boolean
    direction?: boolean
    success?: boolean
    syncTime?: boolean
  }, ExtArgs["result"]["sync_logs"]>

  export type Sync_logsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    syncLogId?: boolean
    deviceId?: boolean
    direction?: boolean
    success?: boolean
    syncTime?: boolean
  }, ExtArgs["result"]["sync_logs"]>

  export type Sync_logsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    syncLogId?: boolean
    deviceId?: boolean
    direction?: boolean
    success?: boolean
    syncTime?: boolean
  }, ExtArgs["result"]["sync_logs"]>

  export type Sync_logsSelectScalar = {
    syncLogId?: boolean
    deviceId?: boolean
    direction?: boolean
    success?: boolean
    syncTime?: boolean
  }

  export type Sync_logsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"syncLogId" | "deviceId" | "direction" | "success" | "syncTime", ExtArgs["result"]["sync_logs"]>

  export type $Sync_logsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sync_logs"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      syncLogId: number
      deviceId: number
      direction: string
      success: boolean
      syncTime: Date
    }, ExtArgs["result"]["sync_logs"]>
    composites: {}
  }

  type Sync_logsGetPayload<S extends boolean | null | undefined | Sync_logsDefaultArgs> = $Result.GetResult<Prisma.$Sync_logsPayload, S>

  type Sync_logsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Sync_logsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Sync_logsCountAggregateInputType | true
    }

  export interface Sync_logsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sync_logs'], meta: { name: 'Sync_logs' } }
    /**
     * Find zero or one Sync_logs that matches the filter.
     * @param {Sync_logsFindUniqueArgs} args - Arguments to find a Sync_logs
     * @example
     * // Get one Sync_logs
     * const sync_logs = await prisma.sync_logs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Sync_logsFindUniqueArgs>(args: SelectSubset<T, Sync_logsFindUniqueArgs<ExtArgs>>): Prisma__Sync_logsClient<$Result.GetResult<Prisma.$Sync_logsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sync_logs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Sync_logsFindUniqueOrThrowArgs} args - Arguments to find a Sync_logs
     * @example
     * // Get one Sync_logs
     * const sync_logs = await prisma.sync_logs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Sync_logsFindUniqueOrThrowArgs>(args: SelectSubset<T, Sync_logsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Sync_logsClient<$Result.GetResult<Prisma.$Sync_logsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sync_logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Sync_logsFindFirstArgs} args - Arguments to find a Sync_logs
     * @example
     * // Get one Sync_logs
     * const sync_logs = await prisma.sync_logs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Sync_logsFindFirstArgs>(args?: SelectSubset<T, Sync_logsFindFirstArgs<ExtArgs>>): Prisma__Sync_logsClient<$Result.GetResult<Prisma.$Sync_logsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sync_logs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Sync_logsFindFirstOrThrowArgs} args - Arguments to find a Sync_logs
     * @example
     * // Get one Sync_logs
     * const sync_logs = await prisma.sync_logs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Sync_logsFindFirstOrThrowArgs>(args?: SelectSubset<T, Sync_logsFindFirstOrThrowArgs<ExtArgs>>): Prisma__Sync_logsClient<$Result.GetResult<Prisma.$Sync_logsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sync_logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Sync_logsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sync_logs
     * const sync_logs = await prisma.sync_logs.findMany()
     * 
     * // Get first 10 Sync_logs
     * const sync_logs = await prisma.sync_logs.findMany({ take: 10 })
     * 
     * // Only select the `syncLogId`
     * const sync_logsWithSyncLogIdOnly = await prisma.sync_logs.findMany({ select: { syncLogId: true } })
     * 
     */
    findMany<T extends Sync_logsFindManyArgs>(args?: SelectSubset<T, Sync_logsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Sync_logsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sync_logs.
     * @param {Sync_logsCreateArgs} args - Arguments to create a Sync_logs.
     * @example
     * // Create one Sync_logs
     * const Sync_logs = await prisma.sync_logs.create({
     *   data: {
     *     // ... data to create a Sync_logs
     *   }
     * })
     * 
     */
    create<T extends Sync_logsCreateArgs>(args: SelectSubset<T, Sync_logsCreateArgs<ExtArgs>>): Prisma__Sync_logsClient<$Result.GetResult<Prisma.$Sync_logsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sync_logs.
     * @param {Sync_logsCreateManyArgs} args - Arguments to create many Sync_logs.
     * @example
     * // Create many Sync_logs
     * const sync_logs = await prisma.sync_logs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Sync_logsCreateManyArgs>(args?: SelectSubset<T, Sync_logsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sync_logs and returns the data saved in the database.
     * @param {Sync_logsCreateManyAndReturnArgs} args - Arguments to create many Sync_logs.
     * @example
     * // Create many Sync_logs
     * const sync_logs = await prisma.sync_logs.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sync_logs and only return the `syncLogId`
     * const sync_logsWithSyncLogIdOnly = await prisma.sync_logs.createManyAndReturn({
     *   select: { syncLogId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Sync_logsCreateManyAndReturnArgs>(args?: SelectSubset<T, Sync_logsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Sync_logsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sync_logs.
     * @param {Sync_logsDeleteArgs} args - Arguments to delete one Sync_logs.
     * @example
     * // Delete one Sync_logs
     * const Sync_logs = await prisma.sync_logs.delete({
     *   where: {
     *     // ... filter to delete one Sync_logs
     *   }
     * })
     * 
     */
    delete<T extends Sync_logsDeleteArgs>(args: SelectSubset<T, Sync_logsDeleteArgs<ExtArgs>>): Prisma__Sync_logsClient<$Result.GetResult<Prisma.$Sync_logsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sync_logs.
     * @param {Sync_logsUpdateArgs} args - Arguments to update one Sync_logs.
     * @example
     * // Update one Sync_logs
     * const sync_logs = await prisma.sync_logs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Sync_logsUpdateArgs>(args: SelectSubset<T, Sync_logsUpdateArgs<ExtArgs>>): Prisma__Sync_logsClient<$Result.GetResult<Prisma.$Sync_logsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sync_logs.
     * @param {Sync_logsDeleteManyArgs} args - Arguments to filter Sync_logs to delete.
     * @example
     * // Delete a few Sync_logs
     * const { count } = await prisma.sync_logs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Sync_logsDeleteManyArgs>(args?: SelectSubset<T, Sync_logsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sync_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Sync_logsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sync_logs
     * const sync_logs = await prisma.sync_logs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Sync_logsUpdateManyArgs>(args: SelectSubset<T, Sync_logsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sync_logs and returns the data updated in the database.
     * @param {Sync_logsUpdateManyAndReturnArgs} args - Arguments to update many Sync_logs.
     * @example
     * // Update many Sync_logs
     * const sync_logs = await prisma.sync_logs.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sync_logs and only return the `syncLogId`
     * const sync_logsWithSyncLogIdOnly = await prisma.sync_logs.updateManyAndReturn({
     *   select: { syncLogId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends Sync_logsUpdateManyAndReturnArgs>(args: SelectSubset<T, Sync_logsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Sync_logsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sync_logs.
     * @param {Sync_logsUpsertArgs} args - Arguments to update or create a Sync_logs.
     * @example
     * // Update or create a Sync_logs
     * const sync_logs = await prisma.sync_logs.upsert({
     *   create: {
     *     // ... data to create a Sync_logs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sync_logs we want to update
     *   }
     * })
     */
    upsert<T extends Sync_logsUpsertArgs>(args: SelectSubset<T, Sync_logsUpsertArgs<ExtArgs>>): Prisma__Sync_logsClient<$Result.GetResult<Prisma.$Sync_logsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sync_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Sync_logsCountArgs} args - Arguments to filter Sync_logs to count.
     * @example
     * // Count the number of Sync_logs
     * const count = await prisma.sync_logs.count({
     *   where: {
     *     // ... the filter for the Sync_logs we want to count
     *   }
     * })
    **/
    count<T extends Sync_logsCountArgs>(
      args?: Subset<T, Sync_logsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Sync_logsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sync_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Sync_logsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Sync_logsAggregateArgs>(args: Subset<T, Sync_logsAggregateArgs>): Prisma.PrismaPromise<GetSync_logsAggregateType<T>>

    /**
     * Group by Sync_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Sync_logsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Sync_logsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Sync_logsGroupByArgs['orderBy'] }
        : { orderBy?: Sync_logsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Sync_logsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSync_logsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sync_logs model
   */
  readonly fields: Sync_logsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sync_logs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Sync_logsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Sync_logs model
   */
  interface Sync_logsFieldRefs {
    readonly syncLogId: FieldRef<"Sync_logs", 'Int'>
    readonly deviceId: FieldRef<"Sync_logs", 'Int'>
    readonly direction: FieldRef<"Sync_logs", 'String'>
    readonly success: FieldRef<"Sync_logs", 'Boolean'>
    readonly syncTime: FieldRef<"Sync_logs", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Sync_logs findUnique
   */
  export type Sync_logsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sync_logs
     */
    select?: Sync_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sync_logs
     */
    omit?: Sync_logsOmit<ExtArgs> | null
    /**
     * Filter, which Sync_logs to fetch.
     */
    where: Sync_logsWhereUniqueInput
  }

  /**
   * Sync_logs findUniqueOrThrow
   */
  export type Sync_logsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sync_logs
     */
    select?: Sync_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sync_logs
     */
    omit?: Sync_logsOmit<ExtArgs> | null
    /**
     * Filter, which Sync_logs to fetch.
     */
    where: Sync_logsWhereUniqueInput
  }

  /**
   * Sync_logs findFirst
   */
  export type Sync_logsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sync_logs
     */
    select?: Sync_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sync_logs
     */
    omit?: Sync_logsOmit<ExtArgs> | null
    /**
     * Filter, which Sync_logs to fetch.
     */
    where?: Sync_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sync_logs to fetch.
     */
    orderBy?: Sync_logsOrderByWithRelationInput | Sync_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sync_logs.
     */
    cursor?: Sync_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sync_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sync_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sync_logs.
     */
    distinct?: Sync_logsScalarFieldEnum | Sync_logsScalarFieldEnum[]
  }

  /**
   * Sync_logs findFirstOrThrow
   */
  export type Sync_logsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sync_logs
     */
    select?: Sync_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sync_logs
     */
    omit?: Sync_logsOmit<ExtArgs> | null
    /**
     * Filter, which Sync_logs to fetch.
     */
    where?: Sync_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sync_logs to fetch.
     */
    orderBy?: Sync_logsOrderByWithRelationInput | Sync_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sync_logs.
     */
    cursor?: Sync_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sync_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sync_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sync_logs.
     */
    distinct?: Sync_logsScalarFieldEnum | Sync_logsScalarFieldEnum[]
  }

  /**
   * Sync_logs findMany
   */
  export type Sync_logsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sync_logs
     */
    select?: Sync_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sync_logs
     */
    omit?: Sync_logsOmit<ExtArgs> | null
    /**
     * Filter, which Sync_logs to fetch.
     */
    where?: Sync_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sync_logs to fetch.
     */
    orderBy?: Sync_logsOrderByWithRelationInput | Sync_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sync_logs.
     */
    cursor?: Sync_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sync_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sync_logs.
     */
    skip?: number
    distinct?: Sync_logsScalarFieldEnum | Sync_logsScalarFieldEnum[]
  }

  /**
   * Sync_logs create
   */
  export type Sync_logsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sync_logs
     */
    select?: Sync_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sync_logs
     */
    omit?: Sync_logsOmit<ExtArgs> | null
    /**
     * The data needed to create a Sync_logs.
     */
    data: XOR<Sync_logsCreateInput, Sync_logsUncheckedCreateInput>
  }

  /**
   * Sync_logs createMany
   */
  export type Sync_logsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sync_logs.
     */
    data: Sync_logsCreateManyInput | Sync_logsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sync_logs createManyAndReturn
   */
  export type Sync_logsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sync_logs
     */
    select?: Sync_logsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sync_logs
     */
    omit?: Sync_logsOmit<ExtArgs> | null
    /**
     * The data used to create many Sync_logs.
     */
    data: Sync_logsCreateManyInput | Sync_logsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sync_logs update
   */
  export type Sync_logsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sync_logs
     */
    select?: Sync_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sync_logs
     */
    omit?: Sync_logsOmit<ExtArgs> | null
    /**
     * The data needed to update a Sync_logs.
     */
    data: XOR<Sync_logsUpdateInput, Sync_logsUncheckedUpdateInput>
    /**
     * Choose, which Sync_logs to update.
     */
    where: Sync_logsWhereUniqueInput
  }

  /**
   * Sync_logs updateMany
   */
  export type Sync_logsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sync_logs.
     */
    data: XOR<Sync_logsUpdateManyMutationInput, Sync_logsUncheckedUpdateManyInput>
    /**
     * Filter which Sync_logs to update
     */
    where?: Sync_logsWhereInput
    /**
     * Limit how many Sync_logs to update.
     */
    limit?: number
  }

  /**
   * Sync_logs updateManyAndReturn
   */
  export type Sync_logsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sync_logs
     */
    select?: Sync_logsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sync_logs
     */
    omit?: Sync_logsOmit<ExtArgs> | null
    /**
     * The data used to update Sync_logs.
     */
    data: XOR<Sync_logsUpdateManyMutationInput, Sync_logsUncheckedUpdateManyInput>
    /**
     * Filter which Sync_logs to update
     */
    where?: Sync_logsWhereInput
    /**
     * Limit how many Sync_logs to update.
     */
    limit?: number
  }

  /**
   * Sync_logs upsert
   */
  export type Sync_logsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sync_logs
     */
    select?: Sync_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sync_logs
     */
    omit?: Sync_logsOmit<ExtArgs> | null
    /**
     * The filter to search for the Sync_logs to update in case it exists.
     */
    where: Sync_logsWhereUniqueInput
    /**
     * In case the Sync_logs found by the `where` argument doesn't exist, create a new Sync_logs with this data.
     */
    create: XOR<Sync_logsCreateInput, Sync_logsUncheckedCreateInput>
    /**
     * In case the Sync_logs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Sync_logsUpdateInput, Sync_logsUncheckedUpdateInput>
  }

  /**
   * Sync_logs delete
   */
  export type Sync_logsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sync_logs
     */
    select?: Sync_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sync_logs
     */
    omit?: Sync_logsOmit<ExtArgs> | null
    /**
     * Filter which Sync_logs to delete.
     */
    where: Sync_logsWhereUniqueInput
  }

  /**
   * Sync_logs deleteMany
   */
  export type Sync_logsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sync_logs to delete
     */
    where?: Sync_logsWhereInput
    /**
     * Limit how many Sync_logs to delete.
     */
    limit?: number
  }

  /**
   * Sync_logs without action
   */
  export type Sync_logsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sync_logs
     */
    select?: Sync_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sync_logs
     */
    omit?: Sync_logsOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    userId: 'userId',
    email: 'email',
    passwordHash: 'passwordHash',
    isVerified: 'isVerified',
    isTwoFactorEnabled: 'isTwoFactorEnabled',
    firstName: 'firstName',
    middleName: 'middleName',
    lastName: 'lastName',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    lastLogin: 'lastLogin',
    role: 'role'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const TokensScalarFieldEnum: {
    id: 'id',
    email: 'email',
    token: 'token',
    type: 'type',
    expiresIn: 'expiresIn'
  };

  export type TokensScalarFieldEnum = (typeof TokensScalarFieldEnum)[keyof typeof TokensScalarFieldEnum]


  export const OrganizationScalarFieldEnum: {
    organizationId: 'organizationId',
    name: 'name',
    createdBy: 'createdBy',
    createdAt: 'createdAt'
  };

  export type OrganizationScalarFieldEnum = (typeof OrganizationScalarFieldEnum)[keyof typeof OrganizationScalarFieldEnum]


  export const Organization_UsersScalarFieldEnum: {
    organizationId: 'organizationId',
    userId: 'userId',
    role: 'role'
  };

  export type Organization_UsersScalarFieldEnum = (typeof Organization_UsersScalarFieldEnum)[keyof typeof Organization_UsersScalarFieldEnum]


  export const WarehousesScalarFieldEnum: {
    warehouseId: 'warehouseId',
    organizationId: 'organizationId',
    name: 'name',
    address: 'address',
    city: 'city',
    state: 'state',
    zip: 'zip',
    country: 'country',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type WarehousesScalarFieldEnum = (typeof WarehousesScalarFieldEnum)[keyof typeof WarehousesScalarFieldEnum]


  export const ProductsScalarFieldEnum: {
    productId: 'productId',
    organizationId: 'organizationId',
    name: 'name',
    sku: 'sku',
    barcode: 'barcode',
    createdAt: 'createdAt'
  };

  export type ProductsScalarFieldEnum = (typeof ProductsScalarFieldEnum)[keyof typeof ProductsScalarFieldEnum]


  export const Nomenclature_CategoryScalarFieldEnum: {
    categoryId: 'categoryId',
    name: 'name'
  };

  export type Nomenclature_CategoryScalarFieldEnum = (typeof Nomenclature_CategoryScalarFieldEnum)[keyof typeof Nomenclature_CategoryScalarFieldEnum]


  export const NomenklaturyScalarFieldEnum: {
    nomenclatureId: 'nomenclatureId',
    categoryId: 'categoryId',
    name: 'name'
  };

  export type NomenklaturyScalarFieldEnum = (typeof NomenklaturyScalarFieldEnum)[keyof typeof NomenklaturyScalarFieldEnum]


  export const Nomenklatury_ProductsScalarFieldEnum: {
    nomenclatureId: 'nomenclatureId',
    productId: 'productId'
  };

  export type Nomenklatury_ProductsScalarFieldEnum = (typeof Nomenklatury_ProductsScalarFieldEnum)[keyof typeof Nomenklatury_ProductsScalarFieldEnum]


  export const DocumentsScalarFieldEnum: {
    documentId: 'documentId',
    organizationId: 'organizationId',
    warehouseId: 'warehouseId',
    documentStatus: 'documentStatus',
    createdBy: 'createdBy',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DocumentsScalarFieldEnum = (typeof DocumentsScalarFieldEnum)[keyof typeof DocumentsScalarFieldEnum]


  export const Documents_ProductsScalarFieldEnum: {
    documentProductId: 'documentProductId',
    documentId: 'documentId',
    productId: 'productId',
    quantityExpected: 'quantityExpected',
    quantityChecked: 'quantityChecked',
    updatedAt: 'updatedAt'
  };

  export type Documents_ProductsScalarFieldEnum = (typeof Documents_ProductsScalarFieldEnum)[keyof typeof Documents_ProductsScalarFieldEnum]


  export const DevicesScalarFieldEnum: {
    deviceId: 'deviceId',
    organizationId: 'organizationId',
    deviceType: 'deviceType',
    deviceName: 'deviceName',
    qrToken: 'qrToken',
    assignedTo: 'assignedTo',
    lastSynced: 'lastSynced',
    createdAt: 'createdAt'
  };

  export type DevicesScalarFieldEnum = (typeof DevicesScalarFieldEnum)[keyof typeof DevicesScalarFieldEnum]


  export const Scan_eventsScalarFieldEnum: {
    scanEventId: 'scanEventId',
    documentId: 'documentId',
    productId: 'productId',
    userId: 'userId',
    deviceId: 'deviceId',
    quantityDelta: 'quantityDelta',
    scannedAt: 'scannedAt',
    synced: 'synced'
  };

  export type Scan_eventsScalarFieldEnum = (typeof Scan_eventsScalarFieldEnum)[keyof typeof Scan_eventsScalarFieldEnum]


  export const Sync_logsScalarFieldEnum: {
    syncLogId: 'syncLogId',
    deviceId: 'deviceId',
    direction: 'direction',
    success: 'success',
    syncTime: 'syncTime'
  };

  export type Sync_logsScalarFieldEnum = (typeof Sync_logsScalarFieldEnum)[keyof typeof Sync_logsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'TokenType'
   */
  export type EnumTokenTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TokenType'>
    


  /**
   * Reference to a field of type 'TokenType[]'
   */
  export type ListEnumTokenTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TokenType[]'>
    


  /**
   * Reference to a field of type 'OrganizationRole'
   */
  export type EnumOrganizationRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrganizationRole'>
    


  /**
   * Reference to a field of type 'OrganizationRole[]'
   */
  export type ListEnumOrganizationRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrganizationRole[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'WarehouseStatus'
   */
  export type EnumWarehouseStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WarehouseStatus'>
    


  /**
   * Reference to a field of type 'WarehouseStatus[]'
   */
  export type ListEnumWarehouseStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WarehouseStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    userId?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    isVerified?: BoolFilter<"User"> | boolean
    isTwoFactorEnabled?: BoolFilter<"User"> | boolean
    firstName?: StringFilter<"User"> | string
    middleName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    lastLogin?: DateTimeFilter<"User"> | Date | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
  }

  export type UserOrderByWithRelationInput = {
    userId?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    isVerified?: SortOrder
    isTwoFactorEnabled?: SortOrder
    firstName?: SortOrder
    middleName?: SortOrder
    lastName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastLogin?: SortOrder
    role?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    userId?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    passwordHash?: StringFilter<"User"> | string
    isVerified?: BoolFilter<"User"> | boolean
    isTwoFactorEnabled?: BoolFilter<"User"> | boolean
    firstName?: StringFilter<"User"> | string
    middleName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    lastLogin?: DateTimeFilter<"User"> | Date | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
  }, "userId" | "email">

  export type UserOrderByWithAggregationInput = {
    userId?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    isVerified?: SortOrder
    isTwoFactorEnabled?: SortOrder
    firstName?: SortOrder
    middleName?: SortOrder
    lastName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastLogin?: SortOrder
    role?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    isVerified?: BoolWithAggregatesFilter<"User"> | boolean
    isTwoFactorEnabled?: BoolWithAggregatesFilter<"User"> | boolean
    firstName?: StringWithAggregatesFilter<"User"> | string
    middleName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    lastLogin?: DateTimeWithAggregatesFilter<"User"> | Date | string
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
  }

  export type TokensWhereInput = {
    AND?: TokensWhereInput | TokensWhereInput[]
    OR?: TokensWhereInput[]
    NOT?: TokensWhereInput | TokensWhereInput[]
    id?: StringFilter<"Tokens"> | string
    email?: StringFilter<"Tokens"> | string
    token?: StringFilter<"Tokens"> | string
    type?: EnumTokenTypeFilter<"Tokens"> | $Enums.TokenType
    expiresIn?: DateTimeFilter<"Tokens"> | Date | string
  }

  export type TokensOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    type?: SortOrder
    expiresIn?: SortOrder
  }

  export type TokensWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: TokensWhereInput | TokensWhereInput[]
    OR?: TokensWhereInput[]
    NOT?: TokensWhereInput | TokensWhereInput[]
    email?: StringFilter<"Tokens"> | string
    type?: EnumTokenTypeFilter<"Tokens"> | $Enums.TokenType
    expiresIn?: DateTimeFilter<"Tokens"> | Date | string
  }, "id" | "token">

  export type TokensOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    type?: SortOrder
    expiresIn?: SortOrder
    _count?: TokensCountOrderByAggregateInput
    _max?: TokensMaxOrderByAggregateInput
    _min?: TokensMinOrderByAggregateInput
  }

  export type TokensScalarWhereWithAggregatesInput = {
    AND?: TokensScalarWhereWithAggregatesInput | TokensScalarWhereWithAggregatesInput[]
    OR?: TokensScalarWhereWithAggregatesInput[]
    NOT?: TokensScalarWhereWithAggregatesInput | TokensScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Tokens"> | string
    email?: StringWithAggregatesFilter<"Tokens"> | string
    token?: StringWithAggregatesFilter<"Tokens"> | string
    type?: EnumTokenTypeWithAggregatesFilter<"Tokens"> | $Enums.TokenType
    expiresIn?: DateTimeWithAggregatesFilter<"Tokens"> | Date | string
  }

  export type OrganizationWhereInput = {
    AND?: OrganizationWhereInput | OrganizationWhereInput[]
    OR?: OrganizationWhereInput[]
    NOT?: OrganizationWhereInput | OrganizationWhereInput[]
    organizationId?: StringFilter<"Organization"> | string
    name?: StringFilter<"Organization"> | string
    createdBy?: StringFilter<"Organization"> | string
    createdAt?: DateTimeFilter<"Organization"> | Date | string
  }

  export type OrganizationOrderByWithRelationInput = {
    organizationId?: SortOrder
    name?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
  }

  export type OrganizationWhereUniqueInput = Prisma.AtLeast<{
    organizationId?: string
    AND?: OrganizationWhereInput | OrganizationWhereInput[]
    OR?: OrganizationWhereInput[]
    NOT?: OrganizationWhereInput | OrganizationWhereInput[]
    name?: StringFilter<"Organization"> | string
    createdBy?: StringFilter<"Organization"> | string
    createdAt?: DateTimeFilter<"Organization"> | Date | string
  }, "organizationId">

  export type OrganizationOrderByWithAggregationInput = {
    organizationId?: SortOrder
    name?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    _count?: OrganizationCountOrderByAggregateInput
    _max?: OrganizationMaxOrderByAggregateInput
    _min?: OrganizationMinOrderByAggregateInput
  }

  export type OrganizationScalarWhereWithAggregatesInput = {
    AND?: OrganizationScalarWhereWithAggregatesInput | OrganizationScalarWhereWithAggregatesInput[]
    OR?: OrganizationScalarWhereWithAggregatesInput[]
    NOT?: OrganizationScalarWhereWithAggregatesInput | OrganizationScalarWhereWithAggregatesInput[]
    organizationId?: StringWithAggregatesFilter<"Organization"> | string
    name?: StringWithAggregatesFilter<"Organization"> | string
    createdBy?: StringWithAggregatesFilter<"Organization"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Organization"> | Date | string
  }

  export type Organization_UsersWhereInput = {
    AND?: Organization_UsersWhereInput | Organization_UsersWhereInput[]
    OR?: Organization_UsersWhereInput[]
    NOT?: Organization_UsersWhereInput | Organization_UsersWhereInput[]
    organizationId?: StringFilter<"Organization_Users"> | string
    userId?: StringFilter<"Organization_Users"> | string
    role?: EnumOrganizationRoleFilter<"Organization_Users"> | $Enums.OrganizationRole
  }

  export type Organization_UsersOrderByWithRelationInput = {
    organizationId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
  }

  export type Organization_UsersWhereUniqueInput = Prisma.AtLeast<{
    organizationId_userId?: Organization_UsersOrganizationIdUserIdCompoundUniqueInput
    AND?: Organization_UsersWhereInput | Organization_UsersWhereInput[]
    OR?: Organization_UsersWhereInput[]
    NOT?: Organization_UsersWhereInput | Organization_UsersWhereInput[]
    organizationId?: StringFilter<"Organization_Users"> | string
    userId?: StringFilter<"Organization_Users"> | string
    role?: EnumOrganizationRoleFilter<"Organization_Users"> | $Enums.OrganizationRole
  }, "organizationId_userId">

  export type Organization_UsersOrderByWithAggregationInput = {
    organizationId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    _count?: Organization_UsersCountOrderByAggregateInput
    _max?: Organization_UsersMaxOrderByAggregateInput
    _min?: Organization_UsersMinOrderByAggregateInput
  }

  export type Organization_UsersScalarWhereWithAggregatesInput = {
    AND?: Organization_UsersScalarWhereWithAggregatesInput | Organization_UsersScalarWhereWithAggregatesInput[]
    OR?: Organization_UsersScalarWhereWithAggregatesInput[]
    NOT?: Organization_UsersScalarWhereWithAggregatesInput | Organization_UsersScalarWhereWithAggregatesInput[]
    organizationId?: StringWithAggregatesFilter<"Organization_Users"> | string
    userId?: StringWithAggregatesFilter<"Organization_Users"> | string
    role?: EnumOrganizationRoleWithAggregatesFilter<"Organization_Users"> | $Enums.OrganizationRole
  }

  export type WarehousesWhereInput = {
    AND?: WarehousesWhereInput | WarehousesWhereInput[]
    OR?: WarehousesWhereInput[]
    NOT?: WarehousesWhereInput | WarehousesWhereInput[]
    warehouseId?: StringFilter<"Warehouses"> | string
    organizationId?: IntFilter<"Warehouses"> | number
    name?: StringFilter<"Warehouses"> | string
    address?: StringFilter<"Warehouses"> | string
    city?: StringFilter<"Warehouses"> | string
    state?: StringFilter<"Warehouses"> | string
    zip?: StringFilter<"Warehouses"> | string
    country?: StringFilter<"Warehouses"> | string
    status?: EnumWarehouseStatusFilter<"Warehouses"> | $Enums.WarehouseStatus
    createdAt?: DateTimeFilter<"Warehouses"> | Date | string
  }

  export type WarehousesOrderByWithRelationInput = {
    warehouseId?: SortOrder
    organizationId?: SortOrder
    name?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zip?: SortOrder
    country?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type WarehousesWhereUniqueInput = Prisma.AtLeast<{
    warehouseId?: string
    AND?: WarehousesWhereInput | WarehousesWhereInput[]
    OR?: WarehousesWhereInput[]
    NOT?: WarehousesWhereInput | WarehousesWhereInput[]
    organizationId?: IntFilter<"Warehouses"> | number
    name?: StringFilter<"Warehouses"> | string
    address?: StringFilter<"Warehouses"> | string
    city?: StringFilter<"Warehouses"> | string
    state?: StringFilter<"Warehouses"> | string
    zip?: StringFilter<"Warehouses"> | string
    country?: StringFilter<"Warehouses"> | string
    status?: EnumWarehouseStatusFilter<"Warehouses"> | $Enums.WarehouseStatus
    createdAt?: DateTimeFilter<"Warehouses"> | Date | string
  }, "warehouseId">

  export type WarehousesOrderByWithAggregationInput = {
    warehouseId?: SortOrder
    organizationId?: SortOrder
    name?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zip?: SortOrder
    country?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: WarehousesCountOrderByAggregateInput
    _avg?: WarehousesAvgOrderByAggregateInput
    _max?: WarehousesMaxOrderByAggregateInput
    _min?: WarehousesMinOrderByAggregateInput
    _sum?: WarehousesSumOrderByAggregateInput
  }

  export type WarehousesScalarWhereWithAggregatesInput = {
    AND?: WarehousesScalarWhereWithAggregatesInput | WarehousesScalarWhereWithAggregatesInput[]
    OR?: WarehousesScalarWhereWithAggregatesInput[]
    NOT?: WarehousesScalarWhereWithAggregatesInput | WarehousesScalarWhereWithAggregatesInput[]
    warehouseId?: StringWithAggregatesFilter<"Warehouses"> | string
    organizationId?: IntWithAggregatesFilter<"Warehouses"> | number
    name?: StringWithAggregatesFilter<"Warehouses"> | string
    address?: StringWithAggregatesFilter<"Warehouses"> | string
    city?: StringWithAggregatesFilter<"Warehouses"> | string
    state?: StringWithAggregatesFilter<"Warehouses"> | string
    zip?: StringWithAggregatesFilter<"Warehouses"> | string
    country?: StringWithAggregatesFilter<"Warehouses"> | string
    status?: EnumWarehouseStatusWithAggregatesFilter<"Warehouses"> | $Enums.WarehouseStatus
    createdAt?: DateTimeWithAggregatesFilter<"Warehouses"> | Date | string
  }

  export type ProductsWhereInput = {
    AND?: ProductsWhereInput | ProductsWhereInput[]
    OR?: ProductsWhereInput[]
    NOT?: ProductsWhereInput | ProductsWhereInput[]
    productId?: StringFilter<"Products"> | string
    organizationId?: StringFilter<"Products"> | string
    name?: StringFilter<"Products"> | string
    sku?: StringFilter<"Products"> | string
    barcode?: StringFilter<"Products"> | string
    createdAt?: DateTimeFilter<"Products"> | Date | string
  }

  export type ProductsOrderByWithRelationInput = {
    productId?: SortOrder
    organizationId?: SortOrder
    name?: SortOrder
    sku?: SortOrder
    barcode?: SortOrder
    createdAt?: SortOrder
  }

  export type ProductsWhereUniqueInput = Prisma.AtLeast<{
    productId?: string
    AND?: ProductsWhereInput | ProductsWhereInput[]
    OR?: ProductsWhereInput[]
    NOT?: ProductsWhereInput | ProductsWhereInput[]
    organizationId?: StringFilter<"Products"> | string
    name?: StringFilter<"Products"> | string
    sku?: StringFilter<"Products"> | string
    barcode?: StringFilter<"Products"> | string
    createdAt?: DateTimeFilter<"Products"> | Date | string
  }, "productId">

  export type ProductsOrderByWithAggregationInput = {
    productId?: SortOrder
    organizationId?: SortOrder
    name?: SortOrder
    sku?: SortOrder
    barcode?: SortOrder
    createdAt?: SortOrder
    _count?: ProductsCountOrderByAggregateInput
    _max?: ProductsMaxOrderByAggregateInput
    _min?: ProductsMinOrderByAggregateInput
  }

  export type ProductsScalarWhereWithAggregatesInput = {
    AND?: ProductsScalarWhereWithAggregatesInput | ProductsScalarWhereWithAggregatesInput[]
    OR?: ProductsScalarWhereWithAggregatesInput[]
    NOT?: ProductsScalarWhereWithAggregatesInput | ProductsScalarWhereWithAggregatesInput[]
    productId?: StringWithAggregatesFilter<"Products"> | string
    organizationId?: StringWithAggregatesFilter<"Products"> | string
    name?: StringWithAggregatesFilter<"Products"> | string
    sku?: StringWithAggregatesFilter<"Products"> | string
    barcode?: StringWithAggregatesFilter<"Products"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Products"> | Date | string
  }

  export type Nomenclature_CategoryWhereInput = {
    AND?: Nomenclature_CategoryWhereInput | Nomenclature_CategoryWhereInput[]
    OR?: Nomenclature_CategoryWhereInput[]
    NOT?: Nomenclature_CategoryWhereInput | Nomenclature_CategoryWhereInput[]
    categoryId?: StringFilter<"Nomenclature_Category"> | string
    name?: StringFilter<"Nomenclature_Category"> | string
  }

  export type Nomenclature_CategoryOrderByWithRelationInput = {
    categoryId?: SortOrder
    name?: SortOrder
  }

  export type Nomenclature_CategoryWhereUniqueInput = Prisma.AtLeast<{
    categoryId?: string
    AND?: Nomenclature_CategoryWhereInput | Nomenclature_CategoryWhereInput[]
    OR?: Nomenclature_CategoryWhereInput[]
    NOT?: Nomenclature_CategoryWhereInput | Nomenclature_CategoryWhereInput[]
    name?: StringFilter<"Nomenclature_Category"> | string
  }, "categoryId">

  export type Nomenclature_CategoryOrderByWithAggregationInput = {
    categoryId?: SortOrder
    name?: SortOrder
    _count?: Nomenclature_CategoryCountOrderByAggregateInput
    _max?: Nomenclature_CategoryMaxOrderByAggregateInput
    _min?: Nomenclature_CategoryMinOrderByAggregateInput
  }

  export type Nomenclature_CategoryScalarWhereWithAggregatesInput = {
    AND?: Nomenclature_CategoryScalarWhereWithAggregatesInput | Nomenclature_CategoryScalarWhereWithAggregatesInput[]
    OR?: Nomenclature_CategoryScalarWhereWithAggregatesInput[]
    NOT?: Nomenclature_CategoryScalarWhereWithAggregatesInput | Nomenclature_CategoryScalarWhereWithAggregatesInput[]
    categoryId?: StringWithAggregatesFilter<"Nomenclature_Category"> | string
    name?: StringWithAggregatesFilter<"Nomenclature_Category"> | string
  }

  export type NomenklaturyWhereInput = {
    AND?: NomenklaturyWhereInput | NomenklaturyWhereInput[]
    OR?: NomenklaturyWhereInput[]
    NOT?: NomenklaturyWhereInput | NomenklaturyWhereInput[]
    nomenclatureId?: StringFilter<"Nomenklatury"> | string
    categoryId?: IntFilter<"Nomenklatury"> | number
    name?: StringFilter<"Nomenklatury"> | string
  }

  export type NomenklaturyOrderByWithRelationInput = {
    nomenclatureId?: SortOrder
    categoryId?: SortOrder
    name?: SortOrder
  }

  export type NomenklaturyWhereUniqueInput = Prisma.AtLeast<{
    nomenclatureId?: string
    AND?: NomenklaturyWhereInput | NomenklaturyWhereInput[]
    OR?: NomenklaturyWhereInput[]
    NOT?: NomenklaturyWhereInput | NomenklaturyWhereInput[]
    categoryId?: IntFilter<"Nomenklatury"> | number
    name?: StringFilter<"Nomenklatury"> | string
  }, "nomenclatureId">

  export type NomenklaturyOrderByWithAggregationInput = {
    nomenclatureId?: SortOrder
    categoryId?: SortOrder
    name?: SortOrder
    _count?: NomenklaturyCountOrderByAggregateInput
    _avg?: NomenklaturyAvgOrderByAggregateInput
    _max?: NomenklaturyMaxOrderByAggregateInput
    _min?: NomenklaturyMinOrderByAggregateInput
    _sum?: NomenklaturySumOrderByAggregateInput
  }

  export type NomenklaturyScalarWhereWithAggregatesInput = {
    AND?: NomenklaturyScalarWhereWithAggregatesInput | NomenklaturyScalarWhereWithAggregatesInput[]
    OR?: NomenklaturyScalarWhereWithAggregatesInput[]
    NOT?: NomenklaturyScalarWhereWithAggregatesInput | NomenklaturyScalarWhereWithAggregatesInput[]
    nomenclatureId?: StringWithAggregatesFilter<"Nomenklatury"> | string
    categoryId?: IntWithAggregatesFilter<"Nomenklatury"> | number
    name?: StringWithAggregatesFilter<"Nomenklatury"> | string
  }

  export type Nomenklatury_ProductsWhereInput = {
    AND?: Nomenklatury_ProductsWhereInput | Nomenklatury_ProductsWhereInput[]
    OR?: Nomenklatury_ProductsWhereInput[]
    NOT?: Nomenklatury_ProductsWhereInput | Nomenklatury_ProductsWhereInput[]
    nomenclatureId?: StringFilter<"Nomenklatury_Products"> | string
    productId?: StringFilter<"Nomenklatury_Products"> | string
  }

  export type Nomenklatury_ProductsOrderByWithRelationInput = {
    nomenclatureId?: SortOrder
    productId?: SortOrder
  }

  export type Nomenklatury_ProductsWhereUniqueInput = Prisma.AtLeast<{
    nomenclatureId_productId?: Nomenklatury_ProductsNomenclatureIdProductIdCompoundUniqueInput
    AND?: Nomenklatury_ProductsWhereInput | Nomenklatury_ProductsWhereInput[]
    OR?: Nomenklatury_ProductsWhereInput[]
    NOT?: Nomenklatury_ProductsWhereInput | Nomenklatury_ProductsWhereInput[]
    nomenclatureId?: StringFilter<"Nomenklatury_Products"> | string
    productId?: StringFilter<"Nomenklatury_Products"> | string
  }, "nomenclatureId_productId">

  export type Nomenklatury_ProductsOrderByWithAggregationInput = {
    nomenclatureId?: SortOrder
    productId?: SortOrder
    _count?: Nomenklatury_ProductsCountOrderByAggregateInput
    _max?: Nomenklatury_ProductsMaxOrderByAggregateInput
    _min?: Nomenklatury_ProductsMinOrderByAggregateInput
  }

  export type Nomenklatury_ProductsScalarWhereWithAggregatesInput = {
    AND?: Nomenklatury_ProductsScalarWhereWithAggregatesInput | Nomenklatury_ProductsScalarWhereWithAggregatesInput[]
    OR?: Nomenklatury_ProductsScalarWhereWithAggregatesInput[]
    NOT?: Nomenklatury_ProductsScalarWhereWithAggregatesInput | Nomenklatury_ProductsScalarWhereWithAggregatesInput[]
    nomenclatureId?: StringWithAggregatesFilter<"Nomenklatury_Products"> | string
    productId?: StringWithAggregatesFilter<"Nomenklatury_Products"> | string
  }

  export type DocumentsWhereInput = {
    AND?: DocumentsWhereInput | DocumentsWhereInput[]
    OR?: DocumentsWhereInput[]
    NOT?: DocumentsWhereInput | DocumentsWhereInput[]
    documentId?: StringFilter<"Documents"> | string
    organizationId?: StringFilter<"Documents"> | string
    warehouseId?: StringFilter<"Documents"> | string
    documentStatus?: StringFilter<"Documents"> | string
    createdBy?: StringFilter<"Documents"> | string
    createdAt?: DateTimeFilter<"Documents"> | Date | string
    updatedAt?: DateTimeFilter<"Documents"> | Date | string
  }

  export type DocumentsOrderByWithRelationInput = {
    documentId?: SortOrder
    organizationId?: SortOrder
    warehouseId?: SortOrder
    documentStatus?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DocumentsWhereUniqueInput = Prisma.AtLeast<{
    documentId?: string
    AND?: DocumentsWhereInput | DocumentsWhereInput[]
    OR?: DocumentsWhereInput[]
    NOT?: DocumentsWhereInput | DocumentsWhereInput[]
    organizationId?: StringFilter<"Documents"> | string
    warehouseId?: StringFilter<"Documents"> | string
    documentStatus?: StringFilter<"Documents"> | string
    createdBy?: StringFilter<"Documents"> | string
    createdAt?: DateTimeFilter<"Documents"> | Date | string
    updatedAt?: DateTimeFilter<"Documents"> | Date | string
  }, "documentId">

  export type DocumentsOrderByWithAggregationInput = {
    documentId?: SortOrder
    organizationId?: SortOrder
    warehouseId?: SortOrder
    documentStatus?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DocumentsCountOrderByAggregateInput
    _max?: DocumentsMaxOrderByAggregateInput
    _min?: DocumentsMinOrderByAggregateInput
  }

  export type DocumentsScalarWhereWithAggregatesInput = {
    AND?: DocumentsScalarWhereWithAggregatesInput | DocumentsScalarWhereWithAggregatesInput[]
    OR?: DocumentsScalarWhereWithAggregatesInput[]
    NOT?: DocumentsScalarWhereWithAggregatesInput | DocumentsScalarWhereWithAggregatesInput[]
    documentId?: StringWithAggregatesFilter<"Documents"> | string
    organizationId?: StringWithAggregatesFilter<"Documents"> | string
    warehouseId?: StringWithAggregatesFilter<"Documents"> | string
    documentStatus?: StringWithAggregatesFilter<"Documents"> | string
    createdBy?: StringWithAggregatesFilter<"Documents"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Documents"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Documents"> | Date | string
  }

  export type Documents_ProductsWhereInput = {
    AND?: Documents_ProductsWhereInput | Documents_ProductsWhereInput[]
    OR?: Documents_ProductsWhereInput[]
    NOT?: Documents_ProductsWhereInput | Documents_ProductsWhereInput[]
    documentProductId?: StringFilter<"Documents_Products"> | string
    documentId?: IntFilter<"Documents_Products"> | number
    productId?: IntFilter<"Documents_Products"> | number
    quantityExpected?: IntFilter<"Documents_Products"> | number
    quantityChecked?: IntFilter<"Documents_Products"> | number
    updatedAt?: DateTimeFilter<"Documents_Products"> | Date | string
  }

  export type Documents_ProductsOrderByWithRelationInput = {
    documentProductId?: SortOrder
    documentId?: SortOrder
    productId?: SortOrder
    quantityExpected?: SortOrder
    quantityChecked?: SortOrder
    updatedAt?: SortOrder
  }

  export type Documents_ProductsWhereUniqueInput = Prisma.AtLeast<{
    documentProductId?: string
    AND?: Documents_ProductsWhereInput | Documents_ProductsWhereInput[]
    OR?: Documents_ProductsWhereInput[]
    NOT?: Documents_ProductsWhereInput | Documents_ProductsWhereInput[]
    documentId?: IntFilter<"Documents_Products"> | number
    productId?: IntFilter<"Documents_Products"> | number
    quantityExpected?: IntFilter<"Documents_Products"> | number
    quantityChecked?: IntFilter<"Documents_Products"> | number
    updatedAt?: DateTimeFilter<"Documents_Products"> | Date | string
  }, "documentProductId">

  export type Documents_ProductsOrderByWithAggregationInput = {
    documentProductId?: SortOrder
    documentId?: SortOrder
    productId?: SortOrder
    quantityExpected?: SortOrder
    quantityChecked?: SortOrder
    updatedAt?: SortOrder
    _count?: Documents_ProductsCountOrderByAggregateInput
    _avg?: Documents_ProductsAvgOrderByAggregateInput
    _max?: Documents_ProductsMaxOrderByAggregateInput
    _min?: Documents_ProductsMinOrderByAggregateInput
    _sum?: Documents_ProductsSumOrderByAggregateInput
  }

  export type Documents_ProductsScalarWhereWithAggregatesInput = {
    AND?: Documents_ProductsScalarWhereWithAggregatesInput | Documents_ProductsScalarWhereWithAggregatesInput[]
    OR?: Documents_ProductsScalarWhereWithAggregatesInput[]
    NOT?: Documents_ProductsScalarWhereWithAggregatesInput | Documents_ProductsScalarWhereWithAggregatesInput[]
    documentProductId?: StringWithAggregatesFilter<"Documents_Products"> | string
    documentId?: IntWithAggregatesFilter<"Documents_Products"> | number
    productId?: IntWithAggregatesFilter<"Documents_Products"> | number
    quantityExpected?: IntWithAggregatesFilter<"Documents_Products"> | number
    quantityChecked?: IntWithAggregatesFilter<"Documents_Products"> | number
    updatedAt?: DateTimeWithAggregatesFilter<"Documents_Products"> | Date | string
  }

  export type DevicesWhereInput = {
    AND?: DevicesWhereInput | DevicesWhereInput[]
    OR?: DevicesWhereInput[]
    NOT?: DevicesWhereInput | DevicesWhereInput[]
    deviceId?: IntFilter<"Devices"> | number
    organizationId?: IntFilter<"Devices"> | number
    deviceType?: StringFilter<"Devices"> | string
    deviceName?: StringFilter<"Devices"> | string
    qrToken?: StringFilter<"Devices"> | string
    assignedTo?: IntFilter<"Devices"> | number
    lastSynced?: DateTimeFilter<"Devices"> | Date | string
    createdAt?: DateTimeFilter<"Devices"> | Date | string
  }

  export type DevicesOrderByWithRelationInput = {
    deviceId?: SortOrder
    organizationId?: SortOrder
    deviceType?: SortOrder
    deviceName?: SortOrder
    qrToken?: SortOrder
    assignedTo?: SortOrder
    lastSynced?: SortOrder
    createdAt?: SortOrder
  }

  export type DevicesWhereUniqueInput = Prisma.AtLeast<{
    deviceId?: number
    AND?: DevicesWhereInput | DevicesWhereInput[]
    OR?: DevicesWhereInput[]
    NOT?: DevicesWhereInput | DevicesWhereInput[]
    organizationId?: IntFilter<"Devices"> | number
    deviceType?: StringFilter<"Devices"> | string
    deviceName?: StringFilter<"Devices"> | string
    qrToken?: StringFilter<"Devices"> | string
    assignedTo?: IntFilter<"Devices"> | number
    lastSynced?: DateTimeFilter<"Devices"> | Date | string
    createdAt?: DateTimeFilter<"Devices"> | Date | string
  }, "deviceId">

  export type DevicesOrderByWithAggregationInput = {
    deviceId?: SortOrder
    organizationId?: SortOrder
    deviceType?: SortOrder
    deviceName?: SortOrder
    qrToken?: SortOrder
    assignedTo?: SortOrder
    lastSynced?: SortOrder
    createdAt?: SortOrder
    _count?: DevicesCountOrderByAggregateInput
    _avg?: DevicesAvgOrderByAggregateInput
    _max?: DevicesMaxOrderByAggregateInput
    _min?: DevicesMinOrderByAggregateInput
    _sum?: DevicesSumOrderByAggregateInput
  }

  export type DevicesScalarWhereWithAggregatesInput = {
    AND?: DevicesScalarWhereWithAggregatesInput | DevicesScalarWhereWithAggregatesInput[]
    OR?: DevicesScalarWhereWithAggregatesInput[]
    NOT?: DevicesScalarWhereWithAggregatesInput | DevicesScalarWhereWithAggregatesInput[]
    deviceId?: IntWithAggregatesFilter<"Devices"> | number
    organizationId?: IntWithAggregatesFilter<"Devices"> | number
    deviceType?: StringWithAggregatesFilter<"Devices"> | string
    deviceName?: StringWithAggregatesFilter<"Devices"> | string
    qrToken?: StringWithAggregatesFilter<"Devices"> | string
    assignedTo?: IntWithAggregatesFilter<"Devices"> | number
    lastSynced?: DateTimeWithAggregatesFilter<"Devices"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Devices"> | Date | string
  }

  export type Scan_eventsWhereInput = {
    AND?: Scan_eventsWhereInput | Scan_eventsWhereInput[]
    OR?: Scan_eventsWhereInput[]
    NOT?: Scan_eventsWhereInput | Scan_eventsWhereInput[]
    scanEventId?: IntFilter<"Scan_events"> | number
    documentId?: IntFilter<"Scan_events"> | number
    productId?: IntFilter<"Scan_events"> | number
    userId?: IntFilter<"Scan_events"> | number
    deviceId?: IntFilter<"Scan_events"> | number
    quantityDelta?: IntFilter<"Scan_events"> | number
    scannedAt?: DateTimeFilter<"Scan_events"> | Date | string
    synced?: BoolFilter<"Scan_events"> | boolean
  }

  export type Scan_eventsOrderByWithRelationInput = {
    scanEventId?: SortOrder
    documentId?: SortOrder
    productId?: SortOrder
    userId?: SortOrder
    deviceId?: SortOrder
    quantityDelta?: SortOrder
    scannedAt?: SortOrder
    synced?: SortOrder
  }

  export type Scan_eventsWhereUniqueInput = Prisma.AtLeast<{
    scanEventId?: number
    AND?: Scan_eventsWhereInput | Scan_eventsWhereInput[]
    OR?: Scan_eventsWhereInput[]
    NOT?: Scan_eventsWhereInput | Scan_eventsWhereInput[]
    documentId?: IntFilter<"Scan_events"> | number
    productId?: IntFilter<"Scan_events"> | number
    userId?: IntFilter<"Scan_events"> | number
    deviceId?: IntFilter<"Scan_events"> | number
    quantityDelta?: IntFilter<"Scan_events"> | number
    scannedAt?: DateTimeFilter<"Scan_events"> | Date | string
    synced?: BoolFilter<"Scan_events"> | boolean
  }, "scanEventId">

  export type Scan_eventsOrderByWithAggregationInput = {
    scanEventId?: SortOrder
    documentId?: SortOrder
    productId?: SortOrder
    userId?: SortOrder
    deviceId?: SortOrder
    quantityDelta?: SortOrder
    scannedAt?: SortOrder
    synced?: SortOrder
    _count?: Scan_eventsCountOrderByAggregateInput
    _avg?: Scan_eventsAvgOrderByAggregateInput
    _max?: Scan_eventsMaxOrderByAggregateInput
    _min?: Scan_eventsMinOrderByAggregateInput
    _sum?: Scan_eventsSumOrderByAggregateInput
  }

  export type Scan_eventsScalarWhereWithAggregatesInput = {
    AND?: Scan_eventsScalarWhereWithAggregatesInput | Scan_eventsScalarWhereWithAggregatesInput[]
    OR?: Scan_eventsScalarWhereWithAggregatesInput[]
    NOT?: Scan_eventsScalarWhereWithAggregatesInput | Scan_eventsScalarWhereWithAggregatesInput[]
    scanEventId?: IntWithAggregatesFilter<"Scan_events"> | number
    documentId?: IntWithAggregatesFilter<"Scan_events"> | number
    productId?: IntWithAggregatesFilter<"Scan_events"> | number
    userId?: IntWithAggregatesFilter<"Scan_events"> | number
    deviceId?: IntWithAggregatesFilter<"Scan_events"> | number
    quantityDelta?: IntWithAggregatesFilter<"Scan_events"> | number
    scannedAt?: DateTimeWithAggregatesFilter<"Scan_events"> | Date | string
    synced?: BoolWithAggregatesFilter<"Scan_events"> | boolean
  }

  export type Sync_logsWhereInput = {
    AND?: Sync_logsWhereInput | Sync_logsWhereInput[]
    OR?: Sync_logsWhereInput[]
    NOT?: Sync_logsWhereInput | Sync_logsWhereInput[]
    syncLogId?: IntFilter<"Sync_logs"> | number
    deviceId?: IntFilter<"Sync_logs"> | number
    direction?: StringFilter<"Sync_logs"> | string
    success?: BoolFilter<"Sync_logs"> | boolean
    syncTime?: DateTimeFilter<"Sync_logs"> | Date | string
  }

  export type Sync_logsOrderByWithRelationInput = {
    syncLogId?: SortOrder
    deviceId?: SortOrder
    direction?: SortOrder
    success?: SortOrder
    syncTime?: SortOrder
  }

  export type Sync_logsWhereUniqueInput = Prisma.AtLeast<{
    syncLogId?: number
    AND?: Sync_logsWhereInput | Sync_logsWhereInput[]
    OR?: Sync_logsWhereInput[]
    NOT?: Sync_logsWhereInput | Sync_logsWhereInput[]
    deviceId?: IntFilter<"Sync_logs"> | number
    direction?: StringFilter<"Sync_logs"> | string
    success?: BoolFilter<"Sync_logs"> | boolean
    syncTime?: DateTimeFilter<"Sync_logs"> | Date | string
  }, "syncLogId">

  export type Sync_logsOrderByWithAggregationInput = {
    syncLogId?: SortOrder
    deviceId?: SortOrder
    direction?: SortOrder
    success?: SortOrder
    syncTime?: SortOrder
    _count?: Sync_logsCountOrderByAggregateInput
    _avg?: Sync_logsAvgOrderByAggregateInput
    _max?: Sync_logsMaxOrderByAggregateInput
    _min?: Sync_logsMinOrderByAggregateInput
    _sum?: Sync_logsSumOrderByAggregateInput
  }

  export type Sync_logsScalarWhereWithAggregatesInput = {
    AND?: Sync_logsScalarWhereWithAggregatesInput | Sync_logsScalarWhereWithAggregatesInput[]
    OR?: Sync_logsScalarWhereWithAggregatesInput[]
    NOT?: Sync_logsScalarWhereWithAggregatesInput | Sync_logsScalarWhereWithAggregatesInput[]
    syncLogId?: IntWithAggregatesFilter<"Sync_logs"> | number
    deviceId?: IntWithAggregatesFilter<"Sync_logs"> | number
    direction?: StringWithAggregatesFilter<"Sync_logs"> | string
    success?: BoolWithAggregatesFilter<"Sync_logs"> | boolean
    syncTime?: DateTimeWithAggregatesFilter<"Sync_logs"> | Date | string
  }

  export type UserCreateInput = {
    userId?: string
    email: string
    passwordHash: string
    isVerified?: boolean
    isTwoFactorEnabled?: boolean
    firstName: string
    middleName: string
    lastName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLogin?: Date | string
    role?: $Enums.UserRole
  }

  export type UserUncheckedCreateInput = {
    userId?: string
    email: string
    passwordHash: string
    isVerified?: boolean
    isTwoFactorEnabled?: boolean
    firstName: string
    middleName: string
    lastName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLogin?: Date | string
    role?: $Enums.UserRole
  }

  export type UserUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isTwoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
  }

  export type UserUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isTwoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
  }

  export type UserCreateManyInput = {
    userId?: string
    email: string
    passwordHash: string
    isVerified?: boolean
    isTwoFactorEnabled?: boolean
    firstName: string
    middleName: string
    lastName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLogin?: Date | string
    role?: $Enums.UserRole
  }

  export type UserUpdateManyMutationInput = {
    userId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isTwoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
  }

  export type UserUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isTwoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
  }

  export type TokensCreateInput = {
    id?: string
    email: string
    token: string
    type: $Enums.TokenType
    expiresIn: Date | string
  }

  export type TokensUncheckedCreateInput = {
    id?: string
    email: string
    token: string
    type: $Enums.TokenType
    expiresIn: Date | string
  }

  export type TokensUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    type?: EnumTokenTypeFieldUpdateOperationsInput | $Enums.TokenType
    expiresIn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokensUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    type?: EnumTokenTypeFieldUpdateOperationsInput | $Enums.TokenType
    expiresIn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokensCreateManyInput = {
    id?: string
    email: string
    token: string
    type: $Enums.TokenType
    expiresIn: Date | string
  }

  export type TokensUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    type?: EnumTokenTypeFieldUpdateOperationsInput | $Enums.TokenType
    expiresIn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokensUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    type?: EnumTokenTypeFieldUpdateOperationsInput | $Enums.TokenType
    expiresIn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationCreateInput = {
    organizationId?: string
    name: string
    createdBy: string
    createdAt?: Date | string
  }

  export type OrganizationUncheckedCreateInput = {
    organizationId?: string
    name: string
    createdBy: string
    createdAt?: Date | string
  }

  export type OrganizationUpdateInput = {
    organizationId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationUncheckedUpdateInput = {
    organizationId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationCreateManyInput = {
    organizationId?: string
    name: string
    createdBy: string
    createdAt?: Date | string
  }

  export type OrganizationUpdateManyMutationInput = {
    organizationId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationUncheckedUpdateManyInput = {
    organizationId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Organization_UsersCreateInput = {
    organizationId: string
    userId: string
    role?: $Enums.OrganizationRole
  }

  export type Organization_UsersUncheckedCreateInput = {
    organizationId: string
    userId: string
    role?: $Enums.OrganizationRole
  }

  export type Organization_UsersUpdateInput = {
    organizationId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: EnumOrganizationRoleFieldUpdateOperationsInput | $Enums.OrganizationRole
  }

  export type Organization_UsersUncheckedUpdateInput = {
    organizationId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: EnumOrganizationRoleFieldUpdateOperationsInput | $Enums.OrganizationRole
  }

  export type Organization_UsersCreateManyInput = {
    organizationId: string
    userId: string
    role?: $Enums.OrganizationRole
  }

  export type Organization_UsersUpdateManyMutationInput = {
    organizationId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: EnumOrganizationRoleFieldUpdateOperationsInput | $Enums.OrganizationRole
  }

  export type Organization_UsersUncheckedUpdateManyInput = {
    organizationId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: EnumOrganizationRoleFieldUpdateOperationsInput | $Enums.OrganizationRole
  }

  export type WarehousesCreateInput = {
    warehouseId?: string
    organizationId: number
    name: string
    address: string
    city: string
    state: string
    zip: string
    country: string
    status?: $Enums.WarehouseStatus
    createdAt?: Date | string
  }

  export type WarehousesUncheckedCreateInput = {
    warehouseId?: string
    organizationId: number
    name: string
    address: string
    city: string
    state: string
    zip: string
    country: string
    status?: $Enums.WarehouseStatus
    createdAt?: Date | string
  }

  export type WarehousesUpdateInput = {
    warehouseId?: StringFieldUpdateOperationsInput | string
    organizationId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zip?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    status?: EnumWarehouseStatusFieldUpdateOperationsInput | $Enums.WarehouseStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WarehousesUncheckedUpdateInput = {
    warehouseId?: StringFieldUpdateOperationsInput | string
    organizationId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zip?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    status?: EnumWarehouseStatusFieldUpdateOperationsInput | $Enums.WarehouseStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WarehousesCreateManyInput = {
    warehouseId?: string
    organizationId: number
    name: string
    address: string
    city: string
    state: string
    zip: string
    country: string
    status?: $Enums.WarehouseStatus
    createdAt?: Date | string
  }

  export type WarehousesUpdateManyMutationInput = {
    warehouseId?: StringFieldUpdateOperationsInput | string
    organizationId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zip?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    status?: EnumWarehouseStatusFieldUpdateOperationsInput | $Enums.WarehouseStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WarehousesUncheckedUpdateManyInput = {
    warehouseId?: StringFieldUpdateOperationsInput | string
    organizationId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zip?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    status?: EnumWarehouseStatusFieldUpdateOperationsInput | $Enums.WarehouseStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductsCreateInput = {
    productId?: string
    organizationId: string
    name: string
    sku: string
    barcode: string
    createdAt?: Date | string
  }

  export type ProductsUncheckedCreateInput = {
    productId?: string
    organizationId: string
    name: string
    sku: string
    barcode: string
    createdAt?: Date | string
  }

  export type ProductsUpdateInput = {
    productId?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    barcode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductsUncheckedUpdateInput = {
    productId?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    barcode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductsCreateManyInput = {
    productId?: string
    organizationId: string
    name: string
    sku: string
    barcode: string
    createdAt?: Date | string
  }

  export type ProductsUpdateManyMutationInput = {
    productId?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    barcode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductsUncheckedUpdateManyInput = {
    productId?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    barcode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Nomenclature_CategoryCreateInput = {
    categoryId?: string
    name: string
  }

  export type Nomenclature_CategoryUncheckedCreateInput = {
    categoryId?: string
    name: string
  }

  export type Nomenclature_CategoryUpdateInput = {
    categoryId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type Nomenclature_CategoryUncheckedUpdateInput = {
    categoryId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type Nomenclature_CategoryCreateManyInput = {
    categoryId?: string
    name: string
  }

  export type Nomenclature_CategoryUpdateManyMutationInput = {
    categoryId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type Nomenclature_CategoryUncheckedUpdateManyInput = {
    categoryId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type NomenklaturyCreateInput = {
    nomenclatureId?: string
    categoryId: number
    name: string
  }

  export type NomenklaturyUncheckedCreateInput = {
    nomenclatureId?: string
    categoryId: number
    name: string
  }

  export type NomenklaturyUpdateInput = {
    nomenclatureId?: StringFieldUpdateOperationsInput | string
    categoryId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type NomenklaturyUncheckedUpdateInput = {
    nomenclatureId?: StringFieldUpdateOperationsInput | string
    categoryId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type NomenklaturyCreateManyInput = {
    nomenclatureId?: string
    categoryId: number
    name: string
  }

  export type NomenklaturyUpdateManyMutationInput = {
    nomenclatureId?: StringFieldUpdateOperationsInput | string
    categoryId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type NomenklaturyUncheckedUpdateManyInput = {
    nomenclatureId?: StringFieldUpdateOperationsInput | string
    categoryId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type Nomenklatury_ProductsCreateInput = {
    nomenclatureId: string
    productId: string
  }

  export type Nomenklatury_ProductsUncheckedCreateInput = {
    nomenclatureId: string
    productId: string
  }

  export type Nomenklatury_ProductsUpdateInput = {
    nomenclatureId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
  }

  export type Nomenklatury_ProductsUncheckedUpdateInput = {
    nomenclatureId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
  }

  export type Nomenklatury_ProductsCreateManyInput = {
    nomenclatureId: string
    productId: string
  }

  export type Nomenklatury_ProductsUpdateManyMutationInput = {
    nomenclatureId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
  }

  export type Nomenklatury_ProductsUncheckedUpdateManyInput = {
    nomenclatureId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
  }

  export type DocumentsCreateInput = {
    documentId?: string
    organizationId: string
    warehouseId: string
    documentStatus: string
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DocumentsUncheckedCreateInput = {
    documentId?: string
    organizationId: string
    warehouseId: string
    documentStatus: string
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DocumentsUpdateInput = {
    documentId?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    warehouseId?: StringFieldUpdateOperationsInput | string
    documentStatus?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentsUncheckedUpdateInput = {
    documentId?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    warehouseId?: StringFieldUpdateOperationsInput | string
    documentStatus?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentsCreateManyInput = {
    documentId?: string
    organizationId: string
    warehouseId: string
    documentStatus: string
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DocumentsUpdateManyMutationInput = {
    documentId?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    warehouseId?: StringFieldUpdateOperationsInput | string
    documentStatus?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentsUncheckedUpdateManyInput = {
    documentId?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    warehouseId?: StringFieldUpdateOperationsInput | string
    documentStatus?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Documents_ProductsCreateInput = {
    documentProductId?: string
    documentId: number
    productId: number
    quantityExpected: number
    quantityChecked: number
    updatedAt?: Date | string
  }

  export type Documents_ProductsUncheckedCreateInput = {
    documentProductId?: string
    documentId: number
    productId: number
    quantityExpected: number
    quantityChecked: number
    updatedAt?: Date | string
  }

  export type Documents_ProductsUpdateInput = {
    documentProductId?: StringFieldUpdateOperationsInput | string
    documentId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    quantityExpected?: IntFieldUpdateOperationsInput | number
    quantityChecked?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Documents_ProductsUncheckedUpdateInput = {
    documentProductId?: StringFieldUpdateOperationsInput | string
    documentId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    quantityExpected?: IntFieldUpdateOperationsInput | number
    quantityChecked?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Documents_ProductsCreateManyInput = {
    documentProductId?: string
    documentId: number
    productId: number
    quantityExpected: number
    quantityChecked: number
    updatedAt?: Date | string
  }

  export type Documents_ProductsUpdateManyMutationInput = {
    documentProductId?: StringFieldUpdateOperationsInput | string
    documentId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    quantityExpected?: IntFieldUpdateOperationsInput | number
    quantityChecked?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Documents_ProductsUncheckedUpdateManyInput = {
    documentProductId?: StringFieldUpdateOperationsInput | string
    documentId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    quantityExpected?: IntFieldUpdateOperationsInput | number
    quantityChecked?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DevicesCreateInput = {
    organizationId: number
    deviceType: string
    deviceName: string
    qrToken: string
    assignedTo: number
    lastSynced?: Date | string
    createdAt?: Date | string
  }

  export type DevicesUncheckedCreateInput = {
    deviceId?: number
    organizationId: number
    deviceType: string
    deviceName: string
    qrToken: string
    assignedTo: number
    lastSynced?: Date | string
    createdAt?: Date | string
  }

  export type DevicesUpdateInput = {
    organizationId?: IntFieldUpdateOperationsInput | number
    deviceType?: StringFieldUpdateOperationsInput | string
    deviceName?: StringFieldUpdateOperationsInput | string
    qrToken?: StringFieldUpdateOperationsInput | string
    assignedTo?: IntFieldUpdateOperationsInput | number
    lastSynced?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DevicesUncheckedUpdateInput = {
    deviceId?: IntFieldUpdateOperationsInput | number
    organizationId?: IntFieldUpdateOperationsInput | number
    deviceType?: StringFieldUpdateOperationsInput | string
    deviceName?: StringFieldUpdateOperationsInput | string
    qrToken?: StringFieldUpdateOperationsInput | string
    assignedTo?: IntFieldUpdateOperationsInput | number
    lastSynced?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DevicesCreateManyInput = {
    deviceId?: number
    organizationId: number
    deviceType: string
    deviceName: string
    qrToken: string
    assignedTo: number
    lastSynced?: Date | string
    createdAt?: Date | string
  }

  export type DevicesUpdateManyMutationInput = {
    organizationId?: IntFieldUpdateOperationsInput | number
    deviceType?: StringFieldUpdateOperationsInput | string
    deviceName?: StringFieldUpdateOperationsInput | string
    qrToken?: StringFieldUpdateOperationsInput | string
    assignedTo?: IntFieldUpdateOperationsInput | number
    lastSynced?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DevicesUncheckedUpdateManyInput = {
    deviceId?: IntFieldUpdateOperationsInput | number
    organizationId?: IntFieldUpdateOperationsInput | number
    deviceType?: StringFieldUpdateOperationsInput | string
    deviceName?: StringFieldUpdateOperationsInput | string
    qrToken?: StringFieldUpdateOperationsInput | string
    assignedTo?: IntFieldUpdateOperationsInput | number
    lastSynced?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Scan_eventsCreateInput = {
    documentId: number
    productId: number
    userId: number
    deviceId: number
    quantityDelta: number
    scannedAt?: Date | string
    synced?: boolean
  }

  export type Scan_eventsUncheckedCreateInput = {
    scanEventId?: number
    documentId: number
    productId: number
    userId: number
    deviceId: number
    quantityDelta: number
    scannedAt?: Date | string
    synced?: boolean
  }

  export type Scan_eventsUpdateInput = {
    documentId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    deviceId?: IntFieldUpdateOperationsInput | number
    quantityDelta?: IntFieldUpdateOperationsInput | number
    scannedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    synced?: BoolFieldUpdateOperationsInput | boolean
  }

  export type Scan_eventsUncheckedUpdateInput = {
    scanEventId?: IntFieldUpdateOperationsInput | number
    documentId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    deviceId?: IntFieldUpdateOperationsInput | number
    quantityDelta?: IntFieldUpdateOperationsInput | number
    scannedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    synced?: BoolFieldUpdateOperationsInput | boolean
  }

  export type Scan_eventsCreateManyInput = {
    scanEventId?: number
    documentId: number
    productId: number
    userId: number
    deviceId: number
    quantityDelta: number
    scannedAt?: Date | string
    synced?: boolean
  }

  export type Scan_eventsUpdateManyMutationInput = {
    documentId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    deviceId?: IntFieldUpdateOperationsInput | number
    quantityDelta?: IntFieldUpdateOperationsInput | number
    scannedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    synced?: BoolFieldUpdateOperationsInput | boolean
  }

  export type Scan_eventsUncheckedUpdateManyInput = {
    scanEventId?: IntFieldUpdateOperationsInput | number
    documentId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    deviceId?: IntFieldUpdateOperationsInput | number
    quantityDelta?: IntFieldUpdateOperationsInput | number
    scannedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    synced?: BoolFieldUpdateOperationsInput | boolean
  }

  export type Sync_logsCreateInput = {
    deviceId: number
    direction: string
    success: boolean
    syncTime?: Date | string
  }

  export type Sync_logsUncheckedCreateInput = {
    syncLogId?: number
    deviceId: number
    direction: string
    success: boolean
    syncTime?: Date | string
  }

  export type Sync_logsUpdateInput = {
    deviceId?: IntFieldUpdateOperationsInput | number
    direction?: StringFieldUpdateOperationsInput | string
    success?: BoolFieldUpdateOperationsInput | boolean
    syncTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Sync_logsUncheckedUpdateInput = {
    syncLogId?: IntFieldUpdateOperationsInput | number
    deviceId?: IntFieldUpdateOperationsInput | number
    direction?: StringFieldUpdateOperationsInput | string
    success?: BoolFieldUpdateOperationsInput | boolean
    syncTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Sync_logsCreateManyInput = {
    syncLogId?: number
    deviceId: number
    direction: string
    success: boolean
    syncTime?: Date | string
  }

  export type Sync_logsUpdateManyMutationInput = {
    deviceId?: IntFieldUpdateOperationsInput | number
    direction?: StringFieldUpdateOperationsInput | string
    success?: BoolFieldUpdateOperationsInput | boolean
    syncTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Sync_logsUncheckedUpdateManyInput = {
    syncLogId?: IntFieldUpdateOperationsInput | number
    deviceId?: IntFieldUpdateOperationsInput | number
    direction?: StringFieldUpdateOperationsInput | string
    success?: BoolFieldUpdateOperationsInput | boolean
    syncTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type UserCountOrderByAggregateInput = {
    userId?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    isVerified?: SortOrder
    isTwoFactorEnabled?: SortOrder
    firstName?: SortOrder
    middleName?: SortOrder
    lastName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastLogin?: SortOrder
    role?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    userId?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    isVerified?: SortOrder
    isTwoFactorEnabled?: SortOrder
    firstName?: SortOrder
    middleName?: SortOrder
    lastName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastLogin?: SortOrder
    role?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    userId?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    isVerified?: SortOrder
    isTwoFactorEnabled?: SortOrder
    firstName?: SortOrder
    middleName?: SortOrder
    lastName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastLogin?: SortOrder
    role?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type EnumTokenTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TokenType | EnumTokenTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TokenType[] | ListEnumTokenTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TokenType[] | ListEnumTokenTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTokenTypeFilter<$PrismaModel> | $Enums.TokenType
  }

  export type TokensCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    type?: SortOrder
    expiresIn?: SortOrder
  }

  export type TokensMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    type?: SortOrder
    expiresIn?: SortOrder
  }

  export type TokensMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    type?: SortOrder
    expiresIn?: SortOrder
  }

  export type EnumTokenTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TokenType | EnumTokenTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TokenType[] | ListEnumTokenTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TokenType[] | ListEnumTokenTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTokenTypeWithAggregatesFilter<$PrismaModel> | $Enums.TokenType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTokenTypeFilter<$PrismaModel>
    _max?: NestedEnumTokenTypeFilter<$PrismaModel>
  }

  export type OrganizationCountOrderByAggregateInput = {
    organizationId?: SortOrder
    name?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
  }

  export type OrganizationMaxOrderByAggregateInput = {
    organizationId?: SortOrder
    name?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
  }

  export type OrganizationMinOrderByAggregateInput = {
    organizationId?: SortOrder
    name?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumOrganizationRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.OrganizationRole | EnumOrganizationRoleFieldRefInput<$PrismaModel>
    in?: $Enums.OrganizationRole[] | ListEnumOrganizationRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrganizationRole[] | ListEnumOrganizationRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumOrganizationRoleFilter<$PrismaModel> | $Enums.OrganizationRole
  }

  export type Organization_UsersOrganizationIdUserIdCompoundUniqueInput = {
    organizationId: string
    userId: string
  }

  export type Organization_UsersCountOrderByAggregateInput = {
    organizationId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
  }

  export type Organization_UsersMaxOrderByAggregateInput = {
    organizationId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
  }

  export type Organization_UsersMinOrderByAggregateInput = {
    organizationId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
  }

  export type EnumOrganizationRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrganizationRole | EnumOrganizationRoleFieldRefInput<$PrismaModel>
    in?: $Enums.OrganizationRole[] | ListEnumOrganizationRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrganizationRole[] | ListEnumOrganizationRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumOrganizationRoleWithAggregatesFilter<$PrismaModel> | $Enums.OrganizationRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrganizationRoleFilter<$PrismaModel>
    _max?: NestedEnumOrganizationRoleFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumWarehouseStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.WarehouseStatus | EnumWarehouseStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WarehouseStatus[] | ListEnumWarehouseStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.WarehouseStatus[] | ListEnumWarehouseStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumWarehouseStatusFilter<$PrismaModel> | $Enums.WarehouseStatus
  }

  export type WarehousesCountOrderByAggregateInput = {
    warehouseId?: SortOrder
    organizationId?: SortOrder
    name?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zip?: SortOrder
    country?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type WarehousesAvgOrderByAggregateInput = {
    organizationId?: SortOrder
  }

  export type WarehousesMaxOrderByAggregateInput = {
    warehouseId?: SortOrder
    organizationId?: SortOrder
    name?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zip?: SortOrder
    country?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type WarehousesMinOrderByAggregateInput = {
    warehouseId?: SortOrder
    organizationId?: SortOrder
    name?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zip?: SortOrder
    country?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type WarehousesSumOrderByAggregateInput = {
    organizationId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumWarehouseStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WarehouseStatus | EnumWarehouseStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WarehouseStatus[] | ListEnumWarehouseStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.WarehouseStatus[] | ListEnumWarehouseStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumWarehouseStatusWithAggregatesFilter<$PrismaModel> | $Enums.WarehouseStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWarehouseStatusFilter<$PrismaModel>
    _max?: NestedEnumWarehouseStatusFilter<$PrismaModel>
  }

  export type ProductsCountOrderByAggregateInput = {
    productId?: SortOrder
    organizationId?: SortOrder
    name?: SortOrder
    sku?: SortOrder
    barcode?: SortOrder
    createdAt?: SortOrder
  }

  export type ProductsMaxOrderByAggregateInput = {
    productId?: SortOrder
    organizationId?: SortOrder
    name?: SortOrder
    sku?: SortOrder
    barcode?: SortOrder
    createdAt?: SortOrder
  }

  export type ProductsMinOrderByAggregateInput = {
    productId?: SortOrder
    organizationId?: SortOrder
    name?: SortOrder
    sku?: SortOrder
    barcode?: SortOrder
    createdAt?: SortOrder
  }

  export type Nomenclature_CategoryCountOrderByAggregateInput = {
    categoryId?: SortOrder
    name?: SortOrder
  }

  export type Nomenclature_CategoryMaxOrderByAggregateInput = {
    categoryId?: SortOrder
    name?: SortOrder
  }

  export type Nomenclature_CategoryMinOrderByAggregateInput = {
    categoryId?: SortOrder
    name?: SortOrder
  }

  export type NomenklaturyCountOrderByAggregateInput = {
    nomenclatureId?: SortOrder
    categoryId?: SortOrder
    name?: SortOrder
  }

  export type NomenklaturyAvgOrderByAggregateInput = {
    categoryId?: SortOrder
  }

  export type NomenklaturyMaxOrderByAggregateInput = {
    nomenclatureId?: SortOrder
    categoryId?: SortOrder
    name?: SortOrder
  }

  export type NomenklaturyMinOrderByAggregateInput = {
    nomenclatureId?: SortOrder
    categoryId?: SortOrder
    name?: SortOrder
  }

  export type NomenklaturySumOrderByAggregateInput = {
    categoryId?: SortOrder
  }

  export type Nomenklatury_ProductsNomenclatureIdProductIdCompoundUniqueInput = {
    nomenclatureId: string
    productId: string
  }

  export type Nomenklatury_ProductsCountOrderByAggregateInput = {
    nomenclatureId?: SortOrder
    productId?: SortOrder
  }

  export type Nomenklatury_ProductsMaxOrderByAggregateInput = {
    nomenclatureId?: SortOrder
    productId?: SortOrder
  }

  export type Nomenklatury_ProductsMinOrderByAggregateInput = {
    nomenclatureId?: SortOrder
    productId?: SortOrder
  }

  export type DocumentsCountOrderByAggregateInput = {
    documentId?: SortOrder
    organizationId?: SortOrder
    warehouseId?: SortOrder
    documentStatus?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DocumentsMaxOrderByAggregateInput = {
    documentId?: SortOrder
    organizationId?: SortOrder
    warehouseId?: SortOrder
    documentStatus?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DocumentsMinOrderByAggregateInput = {
    documentId?: SortOrder
    organizationId?: SortOrder
    warehouseId?: SortOrder
    documentStatus?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type Documents_ProductsCountOrderByAggregateInput = {
    documentProductId?: SortOrder
    documentId?: SortOrder
    productId?: SortOrder
    quantityExpected?: SortOrder
    quantityChecked?: SortOrder
    updatedAt?: SortOrder
  }

  export type Documents_ProductsAvgOrderByAggregateInput = {
    documentId?: SortOrder
    productId?: SortOrder
    quantityExpected?: SortOrder
    quantityChecked?: SortOrder
  }

  export type Documents_ProductsMaxOrderByAggregateInput = {
    documentProductId?: SortOrder
    documentId?: SortOrder
    productId?: SortOrder
    quantityExpected?: SortOrder
    quantityChecked?: SortOrder
    updatedAt?: SortOrder
  }

  export type Documents_ProductsMinOrderByAggregateInput = {
    documentProductId?: SortOrder
    documentId?: SortOrder
    productId?: SortOrder
    quantityExpected?: SortOrder
    quantityChecked?: SortOrder
    updatedAt?: SortOrder
  }

  export type Documents_ProductsSumOrderByAggregateInput = {
    documentId?: SortOrder
    productId?: SortOrder
    quantityExpected?: SortOrder
    quantityChecked?: SortOrder
  }

  export type DevicesCountOrderByAggregateInput = {
    deviceId?: SortOrder
    organizationId?: SortOrder
    deviceType?: SortOrder
    deviceName?: SortOrder
    qrToken?: SortOrder
    assignedTo?: SortOrder
    lastSynced?: SortOrder
    createdAt?: SortOrder
  }

  export type DevicesAvgOrderByAggregateInput = {
    deviceId?: SortOrder
    organizationId?: SortOrder
    assignedTo?: SortOrder
  }

  export type DevicesMaxOrderByAggregateInput = {
    deviceId?: SortOrder
    organizationId?: SortOrder
    deviceType?: SortOrder
    deviceName?: SortOrder
    qrToken?: SortOrder
    assignedTo?: SortOrder
    lastSynced?: SortOrder
    createdAt?: SortOrder
  }

  export type DevicesMinOrderByAggregateInput = {
    deviceId?: SortOrder
    organizationId?: SortOrder
    deviceType?: SortOrder
    deviceName?: SortOrder
    qrToken?: SortOrder
    assignedTo?: SortOrder
    lastSynced?: SortOrder
    createdAt?: SortOrder
  }

  export type DevicesSumOrderByAggregateInput = {
    deviceId?: SortOrder
    organizationId?: SortOrder
    assignedTo?: SortOrder
  }

  export type Scan_eventsCountOrderByAggregateInput = {
    scanEventId?: SortOrder
    documentId?: SortOrder
    productId?: SortOrder
    userId?: SortOrder
    deviceId?: SortOrder
    quantityDelta?: SortOrder
    scannedAt?: SortOrder
    synced?: SortOrder
  }

  export type Scan_eventsAvgOrderByAggregateInput = {
    scanEventId?: SortOrder
    documentId?: SortOrder
    productId?: SortOrder
    userId?: SortOrder
    deviceId?: SortOrder
    quantityDelta?: SortOrder
  }

  export type Scan_eventsMaxOrderByAggregateInput = {
    scanEventId?: SortOrder
    documentId?: SortOrder
    productId?: SortOrder
    userId?: SortOrder
    deviceId?: SortOrder
    quantityDelta?: SortOrder
    scannedAt?: SortOrder
    synced?: SortOrder
  }

  export type Scan_eventsMinOrderByAggregateInput = {
    scanEventId?: SortOrder
    documentId?: SortOrder
    productId?: SortOrder
    userId?: SortOrder
    deviceId?: SortOrder
    quantityDelta?: SortOrder
    scannedAt?: SortOrder
    synced?: SortOrder
  }

  export type Scan_eventsSumOrderByAggregateInput = {
    scanEventId?: SortOrder
    documentId?: SortOrder
    productId?: SortOrder
    userId?: SortOrder
    deviceId?: SortOrder
    quantityDelta?: SortOrder
  }

  export type Sync_logsCountOrderByAggregateInput = {
    syncLogId?: SortOrder
    deviceId?: SortOrder
    direction?: SortOrder
    success?: SortOrder
    syncTime?: SortOrder
  }

  export type Sync_logsAvgOrderByAggregateInput = {
    syncLogId?: SortOrder
    deviceId?: SortOrder
  }

  export type Sync_logsMaxOrderByAggregateInput = {
    syncLogId?: SortOrder
    deviceId?: SortOrder
    direction?: SortOrder
    success?: SortOrder
    syncTime?: SortOrder
  }

  export type Sync_logsMinOrderByAggregateInput = {
    syncLogId?: SortOrder
    deviceId?: SortOrder
    direction?: SortOrder
    success?: SortOrder
    syncTime?: SortOrder
  }

  export type Sync_logsSumOrderByAggregateInput = {
    syncLogId?: SortOrder
    deviceId?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type EnumTokenTypeFieldUpdateOperationsInput = {
    set?: $Enums.TokenType
  }

  export type EnumOrganizationRoleFieldUpdateOperationsInput = {
    set?: $Enums.OrganizationRole
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumWarehouseStatusFieldUpdateOperationsInput = {
    set?: $Enums.WarehouseStatus
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedEnumTokenTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TokenType | EnumTokenTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TokenType[] | ListEnumTokenTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TokenType[] | ListEnumTokenTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTokenTypeFilter<$PrismaModel> | $Enums.TokenType
  }

  export type NestedEnumTokenTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TokenType | EnumTokenTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TokenType[] | ListEnumTokenTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TokenType[] | ListEnumTokenTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTokenTypeWithAggregatesFilter<$PrismaModel> | $Enums.TokenType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTokenTypeFilter<$PrismaModel>
    _max?: NestedEnumTokenTypeFilter<$PrismaModel>
  }

  export type NestedEnumOrganizationRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.OrganizationRole | EnumOrganizationRoleFieldRefInput<$PrismaModel>
    in?: $Enums.OrganizationRole[] | ListEnumOrganizationRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrganizationRole[] | ListEnumOrganizationRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumOrganizationRoleFilter<$PrismaModel> | $Enums.OrganizationRole
  }

  export type NestedEnumOrganizationRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrganizationRole | EnumOrganizationRoleFieldRefInput<$PrismaModel>
    in?: $Enums.OrganizationRole[] | ListEnumOrganizationRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrganizationRole[] | ListEnumOrganizationRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumOrganizationRoleWithAggregatesFilter<$PrismaModel> | $Enums.OrganizationRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrganizationRoleFilter<$PrismaModel>
    _max?: NestedEnumOrganizationRoleFilter<$PrismaModel>
  }

  export type NestedEnumWarehouseStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.WarehouseStatus | EnumWarehouseStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WarehouseStatus[] | ListEnumWarehouseStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.WarehouseStatus[] | ListEnumWarehouseStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumWarehouseStatusFilter<$PrismaModel> | $Enums.WarehouseStatus
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumWarehouseStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WarehouseStatus | EnumWarehouseStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WarehouseStatus[] | ListEnumWarehouseStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.WarehouseStatus[] | ListEnumWarehouseStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumWarehouseStatusWithAggregatesFilter<$PrismaModel> | $Enums.WarehouseStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWarehouseStatusFilter<$PrismaModel>
    _max?: NestedEnumWarehouseStatusFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}