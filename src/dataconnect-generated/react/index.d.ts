import { CreateCategoryData, ListTransactionsData, UpdateBudgetData, UpdateBudgetVariables, GetFinancialGoalsData } from '../';
import { UseDataConnectQueryResult, useDataConnectQueryOptions, UseDataConnectMutationResult, useDataConnectMutationOptions} from '@tanstack-query-firebase/react/data-connect';
import { UseQueryResult, UseMutationResult} from '@tanstack/react-query';
import { DataConnect } from 'firebase/data-connect';
import { FirebaseError } from 'firebase/app';


export function useCreateCategory(options?: useDataConnectMutationOptions<CreateCategoryData, FirebaseError, void>): UseDataConnectMutationResult<CreateCategoryData, undefined>;
export function useCreateCategory(dc: DataConnect, options?: useDataConnectMutationOptions<CreateCategoryData, FirebaseError, void>): UseDataConnectMutationResult<CreateCategoryData, undefined>;

export function useListTransactions(options?: useDataConnectQueryOptions<ListTransactionsData>): UseDataConnectQueryResult<ListTransactionsData, undefined>;
export function useListTransactions(dc: DataConnect, options?: useDataConnectQueryOptions<ListTransactionsData>): UseDataConnectQueryResult<ListTransactionsData, undefined>;

export function useUpdateBudget(options?: useDataConnectMutationOptions<UpdateBudgetData, FirebaseError, UpdateBudgetVariables>): UseDataConnectMutationResult<UpdateBudgetData, UpdateBudgetVariables>;
export function useUpdateBudget(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateBudgetData, FirebaseError, UpdateBudgetVariables>): UseDataConnectMutationResult<UpdateBudgetData, UpdateBudgetVariables>;

export function useGetFinancialGoals(options?: useDataConnectQueryOptions<GetFinancialGoalsData>): UseDataConnectQueryResult<GetFinancialGoalsData, undefined>;
export function useGetFinancialGoals(dc: DataConnect, options?: useDataConnectQueryOptions<GetFinancialGoalsData>): UseDataConnectQueryResult<GetFinancialGoalsData, undefined>;
