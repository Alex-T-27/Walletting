import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, MutationRef, MutationPromise } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




export interface Account_Key {
  id: UUIDString;
  __typename?: 'Account_Key';
}

export interface Budget_Key {
  id: UUIDString;
  __typename?: 'Budget_Key';
}

export interface Category_Key {
  id: UUIDString;
  __typename?: 'Category_Key';
}

export interface CreateCategoryData {
  category_insert: Category_Key;
}

export interface FinancialGoal_Key {
  id: UUIDString;
  __typename?: 'FinancialGoal_Key';
}

export interface GetFinancialGoalsData {
  financialGoals: ({
    id: UUIDString;
    name: string;
    targetAmount: number;
    currentAmount: number;
    targetDate: DateString;
  } & FinancialGoal_Key)[];
}

export interface ListTransactionsData {
  transactions: ({
    id: UUIDString;
    amount: number;
    description?: string | null;
    transactionDate: TimestampString;
  } & Transaction_Key)[];
}

export interface Transaction_Key {
  id: UUIDString;
  __typename?: 'Transaction_Key';
}

export interface UpdateBudgetData {
  budget_update?: Budget_Key | null;
}

export interface UpdateBudgetVariables {
  id: UUIDString;
  amount: number;
}

export interface User_Key {
  id: UUIDString;
  __typename?: 'User_Key';
}

interface CreateCategoryRef {
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<CreateCategoryData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): MutationRef<CreateCategoryData, undefined>;
  operationName: string;
}
export const createCategoryRef: CreateCategoryRef;

export function createCategory(): MutationPromise<CreateCategoryData, undefined>;
export function createCategory(dc: DataConnect): MutationPromise<CreateCategoryData, undefined>;

interface ListTransactionsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListTransactionsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListTransactionsData, undefined>;
  operationName: string;
}
export const listTransactionsRef: ListTransactionsRef;

export function listTransactions(): QueryPromise<ListTransactionsData, undefined>;
export function listTransactions(dc: DataConnect): QueryPromise<ListTransactionsData, undefined>;

interface UpdateBudgetRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateBudgetVariables): MutationRef<UpdateBudgetData, UpdateBudgetVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateBudgetVariables): MutationRef<UpdateBudgetData, UpdateBudgetVariables>;
  operationName: string;
}
export const updateBudgetRef: UpdateBudgetRef;

export function updateBudget(vars: UpdateBudgetVariables): MutationPromise<UpdateBudgetData, UpdateBudgetVariables>;
export function updateBudget(dc: DataConnect, vars: UpdateBudgetVariables): MutationPromise<UpdateBudgetData, UpdateBudgetVariables>;

interface GetFinancialGoalsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetFinancialGoalsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetFinancialGoalsData, undefined>;
  operationName: string;
}
export const getFinancialGoalsRef: GetFinancialGoalsRef;

export function getFinancialGoals(): QueryPromise<GetFinancialGoalsData, undefined>;
export function getFinancialGoals(dc: DataConnect): QueryPromise<GetFinancialGoalsData, undefined>;

