import { ProjectGroupReferenceState } from '@/store/modules/reference/project-group/type';
import * as getters from './getters';
import * as actions from './actions';
import * as mutations from './mutations';

const state: ProjectGroupReferenceState = {
    items: {},
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
