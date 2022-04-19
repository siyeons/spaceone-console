import { ProviderReferenceState } from '@/store/modules/reference/provider/type';
import * as getters from './getters';
import * as actions from './actions';
import * as mutations from './mutations';

const state: ProviderReferenceState = {
    items: {},
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
