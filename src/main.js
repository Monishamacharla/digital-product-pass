/**
 * Catena-X - Product Passport Consumer Frontend
 *
 * Copyright (c) 2022, 2023 BASF SE, BMW AG, Henkel AG & Co. KGaA
 *
 * See the NOTICE file(s) distributed with this work for additional
 * information regarding copyright ownership.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Apache License, Version 2.0 which is available at
 * https://www.apache.org/licenses/LICENSE-2.0.
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
 * either express or implied. See the
 * License for the specific language govern in permissions and limitations
 * under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import vuetify from './assets/plugins/vuetify';
import { loadFonts } from './assets/plugins/webfontloader';
import router from './router';
import '@/assets/styles/main.scss';
import authentication from '@/services/Authentication';
import { createI18n } from 'vue-i18n';
// Import translation files
import en from '@/translations/en.json';
import de from '@/translations/de.json';

const i18n = createI18n({
    locale: 'en',
    fallbackLocale: 'en',
    messages: {
        en,
        de
    }
});

loadFonts();

const app = createApp(App);
app.use(vuetify);
app.use(store);
app.use(router);
app.use(i18n);

let auth = new authentication();
app.provide('authentication', auth);
auth.keycloakInit(app);
