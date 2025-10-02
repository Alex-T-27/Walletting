# Generated TypeScript README
This README will guide you through the process of using the generated JavaScript SDK package for the connector `example`. It will also provide examples on how to use your generated SDK to call your Data Connect queries and mutations.

**If you're looking for the `React README`, you can find it at [`dataconnect-generated/react/README.md`](./react/README.md)**

***NOTE:** This README is generated alongside the generated SDK. If you make changes to this file, they will be overwritten when the SDK is regenerated.*

# Table of Contents
- [**Overview**](#generated-javascript-readme)
- [**Accessing the connector**](#accessing-the-connector)
  - [*Connecting to the local Emulator*](#connecting-to-the-local-emulator)
- [**Queries**](#queries)
  - [*ListTransactions*](#listtransactions)
  - [*GetFinancialGoals*](#getfinancialgoals)
- [**Mutations**](#mutations)
  - [*CreateCategory*](#createcategory)
  - [*UpdateBudget*](#updatebudget)

# Accessing the connector
A connector is a collection of Queries and Mutations. One SDK is generated for each connector - this SDK is generated for the connector `example`. You can find more information about connectors in the [Data Connect documentation](https://firebase.google.com/docs/data-connect#how-does).

You can use this generated SDK by importing from the package `@dataconnect/generated` as shown below. Both CommonJS and ESM imports are supported.

You can also follow the instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#set-client).

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
```

## Connecting to the local Emulator
By default, the connector will connect to the production service.

To connect to the emulator, you can use the following code.
You can also follow the emulator instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#instrument-clients).

```typescript
import { connectDataConnectEmulator, getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
connectDataConnectEmulator(dataConnect, 'localhost', 9399);
```

After it's initialized, you can call your Data Connect [queries](#queries) and [mutations](#mutations) from your generated SDK.

# Queries

There are two ways to execute a Data Connect Query using the generated Web SDK:
- Using a Query Reference function, which returns a `QueryRef`
  - The `QueryRef` can be used as an argument to `executeQuery()`, which will execute the Query and return a `QueryPromise`
- Using an action shortcut function, which returns a `QueryPromise`
  - Calling the action shortcut function will execute the Query and return a `QueryPromise`

The following is true for both the action shortcut function and the `QueryRef` function:
- The `QueryPromise` returned will resolve to the result of the Query once it has finished executing
- If the Query accepts arguments, both the action shortcut function and the `QueryRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Query
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each query. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-queries).

## ListTransactions
You can execute the `ListTransactions` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listTransactions(): QueryPromise<ListTransactionsData, undefined>;

interface ListTransactionsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListTransactionsData, undefined>;
}
export const listTransactionsRef: ListTransactionsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listTransactions(dc: DataConnect): QueryPromise<ListTransactionsData, undefined>;

interface ListTransactionsRef {
  ...
  (dc: DataConnect): QueryRef<ListTransactionsData, undefined>;
}
export const listTransactionsRef: ListTransactionsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listTransactionsRef:
```typescript
const name = listTransactionsRef.operationName;
console.log(name);
```

### Variables
The `ListTransactions` query has no variables.
### Return Type
Recall that executing the `ListTransactions` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListTransactionsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListTransactionsData {
  transactions: ({
    id: UUIDString;
    amount: number;
    description?: string | null;
    transactionDate: TimestampString;
  } & Transaction_Key)[];
}
```
### Using `ListTransactions`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listTransactions } from '@dataconnect/generated';


// Call the `listTransactions()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listTransactions();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listTransactions(dataConnect);

console.log(data.transactions);

// Or, you can use the `Promise` API.
listTransactions().then((response) => {
  const data = response.data;
  console.log(data.transactions);
});
```

### Using `ListTransactions`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listTransactionsRef } from '@dataconnect/generated';


// Call the `listTransactionsRef()` function to get a reference to the query.
const ref = listTransactionsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listTransactionsRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.transactions);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.transactions);
});
```

## GetFinancialGoals
You can execute the `GetFinancialGoals` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getFinancialGoals(): QueryPromise<GetFinancialGoalsData, undefined>;

interface GetFinancialGoalsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetFinancialGoalsData, undefined>;
}
export const getFinancialGoalsRef: GetFinancialGoalsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getFinancialGoals(dc: DataConnect): QueryPromise<GetFinancialGoalsData, undefined>;

interface GetFinancialGoalsRef {
  ...
  (dc: DataConnect): QueryRef<GetFinancialGoalsData, undefined>;
}
export const getFinancialGoalsRef: GetFinancialGoalsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getFinancialGoalsRef:
```typescript
const name = getFinancialGoalsRef.operationName;
console.log(name);
```

### Variables
The `GetFinancialGoals` query has no variables.
### Return Type
Recall that executing the `GetFinancialGoals` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetFinancialGoalsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetFinancialGoalsData {
  financialGoals: ({
    id: UUIDString;
    name: string;
    targetAmount: number;
    currentAmount: number;
    targetDate: DateString;
  } & FinancialGoal_Key)[];
}
```
### Using `GetFinancialGoals`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getFinancialGoals } from '@dataconnect/generated';


// Call the `getFinancialGoals()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getFinancialGoals();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getFinancialGoals(dataConnect);

console.log(data.financialGoals);

// Or, you can use the `Promise` API.
getFinancialGoals().then((response) => {
  const data = response.data;
  console.log(data.financialGoals);
});
```

### Using `GetFinancialGoals`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getFinancialGoalsRef } from '@dataconnect/generated';


// Call the `getFinancialGoalsRef()` function to get a reference to the query.
const ref = getFinancialGoalsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getFinancialGoalsRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.financialGoals);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.financialGoals);
});
```

# Mutations

There are two ways to execute a Data Connect Mutation using the generated Web SDK:
- Using a Mutation Reference function, which returns a `MutationRef`
  - The `MutationRef` can be used as an argument to `executeMutation()`, which will execute the Mutation and return a `MutationPromise`
- Using an action shortcut function, which returns a `MutationPromise`
  - Calling the action shortcut function will execute the Mutation and return a `MutationPromise`

The following is true for both the action shortcut function and the `MutationRef` function:
- The `MutationPromise` returned will resolve to the result of the Mutation once it has finished executing
- If the Mutation accepts arguments, both the action shortcut function and the `MutationRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Mutation
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each mutation. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-mutations).

## CreateCategory
You can execute the `CreateCategory` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createCategory(): MutationPromise<CreateCategoryData, undefined>;

interface CreateCategoryRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<CreateCategoryData, undefined>;
}
export const createCategoryRef: CreateCategoryRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createCategory(dc: DataConnect): MutationPromise<CreateCategoryData, undefined>;

interface CreateCategoryRef {
  ...
  (dc: DataConnect): MutationRef<CreateCategoryData, undefined>;
}
export const createCategoryRef: CreateCategoryRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createCategoryRef:
```typescript
const name = createCategoryRef.operationName;
console.log(name);
```

### Variables
The `CreateCategory` mutation has no variables.
### Return Type
Recall that executing the `CreateCategory` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateCategoryData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateCategoryData {
  category_insert: Category_Key;
}
```
### Using `CreateCategory`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createCategory } from '@dataconnect/generated';


// Call the `createCategory()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createCategory();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createCategory(dataConnect);

console.log(data.category_insert);

// Or, you can use the `Promise` API.
createCategory().then((response) => {
  const data = response.data;
  console.log(data.category_insert);
});
```

### Using `CreateCategory`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createCategoryRef } from '@dataconnect/generated';


// Call the `createCategoryRef()` function to get a reference to the mutation.
const ref = createCategoryRef();

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createCategoryRef(dataConnect);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.category_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.category_insert);
});
```

## UpdateBudget
You can execute the `UpdateBudget` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updateBudget(vars: UpdateBudgetVariables): MutationPromise<UpdateBudgetData, UpdateBudgetVariables>;

interface UpdateBudgetRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateBudgetVariables): MutationRef<UpdateBudgetData, UpdateBudgetVariables>;
}
export const updateBudgetRef: UpdateBudgetRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateBudget(dc: DataConnect, vars: UpdateBudgetVariables): MutationPromise<UpdateBudgetData, UpdateBudgetVariables>;

interface UpdateBudgetRef {
  ...
  (dc: DataConnect, vars: UpdateBudgetVariables): MutationRef<UpdateBudgetData, UpdateBudgetVariables>;
}
export const updateBudgetRef: UpdateBudgetRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateBudgetRef:
```typescript
const name = updateBudgetRef.operationName;
console.log(name);
```

### Variables
The `UpdateBudget` mutation requires an argument of type `UpdateBudgetVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdateBudgetVariables {
  id: UUIDString;
  amount: number;
}
```
### Return Type
Recall that executing the `UpdateBudget` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateBudgetData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateBudgetData {
  budget_update?: Budget_Key | null;
}
```
### Using `UpdateBudget`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateBudget, UpdateBudgetVariables } from '@dataconnect/generated';

// The `UpdateBudget` mutation requires an argument of type `UpdateBudgetVariables`:
const updateBudgetVars: UpdateBudgetVariables = {
  id: ..., 
  amount: ..., 
};

// Call the `updateBudget()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateBudget(updateBudgetVars);
// Variables can be defined inline as well.
const { data } = await updateBudget({ id: ..., amount: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateBudget(dataConnect, updateBudgetVars);

console.log(data.budget_update);

// Or, you can use the `Promise` API.
updateBudget(updateBudgetVars).then((response) => {
  const data = response.data;
  console.log(data.budget_update);
});
```

### Using `UpdateBudget`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateBudgetRef, UpdateBudgetVariables } from '@dataconnect/generated';

// The `UpdateBudget` mutation requires an argument of type `UpdateBudgetVariables`:
const updateBudgetVars: UpdateBudgetVariables = {
  id: ..., 
  amount: ..., 
};

// Call the `updateBudgetRef()` function to get a reference to the mutation.
const ref = updateBudgetRef(updateBudgetVars);
// Variables can be defined inline as well.
const ref = updateBudgetRef({ id: ..., amount: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateBudgetRef(dataConnect, updateBudgetVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.budget_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.budget_update);
});
```

