import Vue from 'vue';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faCopy, faDownload, faTrash, faGift, faAt} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';

library.add(
    faDownload,
    faCopy,
    faTrash,
    faGift,
    faAt,
);

Vue.component('font-awesome-icon', FontAwesomeIcon);
