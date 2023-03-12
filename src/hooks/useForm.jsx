import { useReducer } from 'react';

const ACTIONS = {
	UPDATE_SEARCH: 'update_search',
	UPDATE_RESULTS: 'update_results',
	UPDATE_CURRENCY: 'update_currency'
}

const reducer = (state, action) => {

	switch(action.type) {
		
		case ACTIONS.UPDATE_SEARCH:
			return {
				...state,
				search: action.payload
			}

		case ACTIONS.UPDATE_RESULTS:
			return {
				...state,
				results: action.payload
			}

		case ACTIONS.UPDATE_CURRENCY:
			return {
				...state,
				currency: action.payload
			}
		
		default:
			return state;
	}
};

export function useForm() {

  const [state, dispatch] = useReducer(reducer, {
		search: '',
		results: 10,
		currency: 'usd'
	});
	
  const { search, results, currency } = state;
	
  return {
    search,
    results,
    currency,
    updateSearch: search => dispatch({
      type: ACTIONS.UPDATE_SEARCH,
      payload: search
    }),
    updateResults: results => dispatch({
      type: ACTIONS.UPDATE_RESULTS,
      payload: parseInt(results)
    }),
    updateCurrency: currency => dispatch({
      type: ACTIONS.UPDATE_CURRENCY,
      payload: currency
    })
  };
};