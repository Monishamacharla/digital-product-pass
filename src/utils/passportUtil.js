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
import iconMappings from "@/config/templates/iconMappings.json";

export default {
    unitRemover(unit) {
        return unit.replace("unit:", "");
    },
    iconFinder(property) {
        // Define a mapping of prefixes to icons
        const prefixToIcon = iconMappings;
        // Split the camel-cased key into separate words and lowercase them
        const words = property
            .split(/(?=[A-Z])/)
            .map((word) => word.toLowerCase());
        // Check each word against the prefixToIcon mapping and take the first
        for (const word of words) {
            if (prefixToIcon[word]) {
                return prefixToIcon[word];
            }
        }

        // If no match is found, return the default icon
        return "mdi-information-outline";
    },
    groupSources(sources) {
        try {

            let mappedSources = {};
            for (let parentKey in sources) {
                let parentSources = sources[parentKey];
                for (let key in parentSources) {
                    let doc = parentSources[key];
                    if (parentKey === "optional") {
                        doc = doc["document"];
                    }
                    if (doc instanceof Array) {
                        for (let docKey in doc) {
                            let subDoc = doc[docKey]["document"];
                            let category = subDoc["category"];
                            if (!Object.prototype.hasOwnProperty.call(mappedSources, category)) {
                                mappedSources[category] = [];
                            }
                            mappedSources[category].push(subDoc);
                        }
                        continue;
                    }

                    let category = doc["category"];
                    if (!Object.prototype.hasOwnProperty.call(mappedSources, category)) {
                        mappedSources[category] = [];
                    }

                    mappedSources[category].push(doc);
                }
            }
            return mappedSources;
        } catch (e) {
            console.error.log(e); // Print error message
            return {};
        }
    }
};
