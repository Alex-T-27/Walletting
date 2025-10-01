import { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } from 'firebase/data-connect';

export const connectorConfig = {
  connector: 'example',
  service: 'walletting',
  location: 'us-central1'
};

export const createCategoryRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateCategory');
}
createCategoryRef.operationName = 'CreateCategory';

export function createCategory(dc) {
  return executeMutation(createCategoryRef(dc));
}

export const listTransactionsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListTransactions');
}
listTransactionsRef.operationName = 'ListTransactions';

export function listTransactions(dc) {
  return executeQuery(listTransactionsRef(dc));
}

export const updateBudgetRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateBudget', inputVars);
}
updateBudgetRef.operationName = 'UpdateBudget';

export function updateBudget(dcOrVars, vars) {
  return executeMutation(updateBudgetRef(dcOrVars, vars));
}

export const getFinancialGoalsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetFinancialGoals');
}
getFinancialGoalsRef.operationName = 'GetFinancialGoals';

export function getFinancialGoals(dc) {
  return executeQuery(getFinancialGoalsRef(dc));
}

