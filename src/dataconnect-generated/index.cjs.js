const { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'example',
  service: 'walletting',
  location: 'us-central1'
};
exports.connectorConfig = connectorConfig;

const createCategoryRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateCategory');
}
createCategoryRef.operationName = 'CreateCategory';
exports.createCategoryRef = createCategoryRef;

exports.createCategory = function createCategory(dc) {
  return executeMutation(createCategoryRef(dc));
};

const listTransactionsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListTransactions');
}
listTransactionsRef.operationName = 'ListTransactions';
exports.listTransactionsRef = listTransactionsRef;

exports.listTransactions = function listTransactions(dc) {
  return executeQuery(listTransactionsRef(dc));
};

const updateBudgetRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateBudget', inputVars);
}
updateBudgetRef.operationName = 'UpdateBudget';
exports.updateBudgetRef = updateBudgetRef;

exports.updateBudget = function updateBudget(dcOrVars, vars) {
  return executeMutation(updateBudgetRef(dcOrVars, vars));
};

const getFinancialGoalsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetFinancialGoals');
}
getFinancialGoalsRef.operationName = 'GetFinancialGoals';
exports.getFinancialGoalsRef = getFinancialGoalsRef;

exports.getFinancialGoals = function getFinancialGoals(dc) {
  return executeQuery(getFinancialGoalsRef(dc));
};
