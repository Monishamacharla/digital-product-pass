<!--
  Catena-X - Product Passport Consumer Application
 
  Copyright (c) 2022, 2023 BASF SE, BMW AG, Henkel AG & Co. KGaA
 
  See the NOTICE file(s) distributed with this work for additional
  information regarding copyright ownership.
 
  This program and the accompanying materials are made available under the
  terms of the Apache License, Version 2.0 which is available at
  https://www.apache.org/licenses/LICENSE-2.0.
 
  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
  either express or implied. See the
  License for the specific language govern in permissions and limitations
  under the License.
 
  SPDX-License-Identifier: Apache-2.0
-->

# tractusx-connector

![Version: 0.3.3](https://img.shields.io/badge/Version-0.3.3-informational?style=flat-square) ![Type: application](https://img.shields.io/badge/Type-application-informational?style=flat-square) ![AppVersion: 0.4.1](https://img.shields.io/badge/AppVersion-0.4.1-informational?style=flat-square)

A Helm chart for Tractus-X Eclipse Data Space Connector. This chart is a test mock that can be used as edc provider for the DPP applicatiton.

**Homepage:** <https://github.com/eclipse-tractusx/tractusx-edc/tree/main/charts/tractusx-connector>

## Source Code

* <https://github.com/eclipse-tractusx/tractusx-edc/tree/main/charts/tractusx-connector>

## Requirements

| Repository | Name | Version |
|------------|------|---------|
| https://charts.bitnami.com/bitnami | postgresql(postgresql) | 12.1.6 |
| https://eclipse-tractusx.github.io/charts/dev | tractusx-connector | 0.4.1 |

## Values

| Key | Type | Default | Description |
|-----|------|---------|-------------|
| postgresql.auth.database | string | `"edc"` |  |
| postgresql.auth.password | string | `"<path:material-pass/data/dev/edc/database#password>"` |  |
| postgresql.auth.username | string | `"<path:material-pass/data/dev/edc/database#user>"` |  |
| postgresql.fullnameOverride | string | `"postgresqlprovider"` |  |
| postgresql.jdbcUrl | string | `"jdbc:postgresql://postgresqlprovider:5432/edc"` |  |
| postgresql.primary.persistence.enabled | bool | `true` |  |
| postgresql.readReplicas.persistence.enabled | bool | `true` |  |
| tractusx-connector.backendService.httpProxyTokenReceiverUrl | string | `"https://materialpass.dev.demo.catena-x.net/endpoint"` |  |
| tractusx-connector.controlplane.affinity | object | `{}` |  |
| tractusx-connector.controlplane.autoscaling.enabled | bool | `false` | Enables [horizontal pod autoscaling](https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/) |
| tractusx-connector.controlplane.autoscaling.maxReplicas | int | `100` | Maximum replicas if resource consumption exceeds resource threshholds |
| tractusx-connector.controlplane.autoscaling.minReplicas | int | `1` | Minimal replicas if resource consumption falls below resource threshholds |
| tractusx-connector.controlplane.autoscaling.targetCPUUtilizationPercentage | int | `80` | targetAverageUtilization of cpu provided to a pod |
| tractusx-connector.controlplane.autoscaling.targetMemoryUtilizationPercentage | int | `80` | targetAverageUtilization of memory provided to a pod |
| tractusx-connector.controlplane.businessPartnerValidation.log.agreementValidation | bool | `true` |  |
| tractusx-connector.controlplane.debug.enabled | bool | `false` |  |
| tractusx-connector.controlplane.debug.port | int | `1044` |  |
| tractusx-connector.controlplane.debug.suspendOnStart | bool | `false` |  |
| tractusx-connector.controlplane.enabled | bool | `true` |  |
| tractusx-connector.controlplane.endpoints | object | `{"control":{"path":"/BPNL000000000000/control","port":8083},"default":{"path":"/BPNL000000000000/api","port":8080},"management":{"authKey":"<path:material-pass/data/dev/edc/oauth#api.key>","path":"/BPNL000000000000/management","port":8081},"metrics":{"path":"/BPNL000000000000/metrics","port":9090},"observability":{"insecure":true,"path":"/BPNL000000000000/observability","port":8085},"protocol":{"path":"/BPNL000000000000/api/v1/dsp","port":8084}}` | endpoints of the control plane |
| tractusx-connector.controlplane.endpoints.control | object | `{"path":"/BPNL000000000000/control","port":8083}` | control api, used for internal control calls. can be added to the internal ingress, but should probably not |
| tractusx-connector.controlplane.endpoints.control.path | string | `"/BPNL000000000000/control"` | path for incoming api calls |
| tractusx-connector.controlplane.endpoints.control.port | int | `8083` | port for incoming api calls |
| tractusx-connector.controlplane.endpoints.default | object | `{"path":"/BPNL000000000000/api","port":8080}` | default api for health checks, should not be added to any ingress |
| tractusx-connector.controlplane.endpoints.default.path | string | `"/BPNL000000000000/api"` | path for incoming api calls |
| tractusx-connector.controlplane.endpoints.default.port | int | `8080` | port for incoming api calls |
| tractusx-connector.controlplane.endpoints.management | object | `{"authKey":"<path:material-pass/data/dev/edc/oauth#api.key>","path":"/BPNL000000000000/management","port":8081}` | data management api, used by internal users, can be added to an ingress and must not be internet facing |
| tractusx-connector.controlplane.endpoints.management.authKey | string | `"<path:material-pass/data/dev/edc/oauth#api.key>"` | authentication key, must be attached to each 'X-Api-Key' request header |
| tractusx-connector.controlplane.endpoints.management.path | string | `"/BPNL000000000000/management"` | path for incoming api calls |
| tractusx-connector.controlplane.endpoints.management.port | int | `8081` | port for incoming api calls |
| tractusx-connector.controlplane.endpoints.metrics | object | `{"path":"/BPNL000000000000/metrics","port":9090}` | metrics api, used for application metrics, must not be internet facing |
| tractusx-connector.controlplane.endpoints.metrics.path | string | `"/BPNL000000000000/metrics"` | path for incoming api calls |
| tractusx-connector.controlplane.endpoints.metrics.port | int | `9090` | port for incoming api calls |
| tractusx-connector.controlplane.endpoints.observability | object | `{"insecure":true,"path":"/BPNL000000000000/observability","port":8085}` | observability api with unsecured access, must not be internet facing |
| tractusx-connector.controlplane.endpoints.observability.insecure | bool | `true` | allow or disallow insecure access, i.e. access without authentication |
| tractusx-connector.controlplane.endpoints.observability.path | string | `"/BPNL000000000000/observability"` | observability api, provides /health /readiness and /liveness endpoints |
| tractusx-connector.controlplane.endpoints.observability.port | int | `8085` | port for incoming API calls |
| tractusx-connector.controlplane.endpoints.protocol | object | `{"path":"/BPNL000000000000/api/v1/dsp","port":8084}` | ids api, used for inter connector communication and must be internet facing |
| tractusx-connector.controlplane.endpoints.protocol.path | string | `"/BPNL000000000000/api/v1/dsp"` | path for incoming api calls |
| tractusx-connector.controlplane.endpoints.protocol.port | int | `8084` | port for incoming api calls |
| tractusx-connector.controlplane.env | object | `{}` |  |
| tractusx-connector.controlplane.envConfigMapNames | list | `[]` |  |
| tractusx-connector.controlplane.envSecretNames | list | `[]` |  |
| tractusx-connector.controlplane.envValueFrom | object | `{}` |  |
| tractusx-connector.controlplane.image.pullPolicy | string | `"IfNotPresent"` | [Kubernetes image pull policy](https://kubernetes.io/docs/concepts/containers/images/#image-pull-policy) to use |
| tractusx-connector.controlplane.image.repository | string | `"tractusx/edc-controlplane-postgresql-hashicorp-vault"` | Which derivate of the control plane to use. when left empty the deployment will select the correct image automatically |
| tractusx-connector.controlplane.image.tag | string | `"0.4.1"` | Overrides the image tag whose default is the chart appVersion |
| tractusx-connector.controlplane.ingresses[0].annotations | object | `{}` | Additional ingress annotations to add |
| tractusx-connector.controlplane.ingresses[0].certManager.clusterIssuer | string | `""` | If preset enables certificate generation via cert-manager cluster-wide issuer |
| tractusx-connector.controlplane.ingresses[0].certManager.issuer | string | `""` | If preset enables certificate generation via cert-manager namespace scoped issuer |
| tractusx-connector.controlplane.ingresses[0].className | string | `"nginx"` | Defines the [ingress class](https://kubernetes.io/docs/concepts/services-networking/ingress/#ingress-class)  to use |
| tractusx-connector.controlplane.ingresses[0].enabled | bool | `true` |  |
| tractusx-connector.controlplane.ingresses[0].endpoints | list | `["default","management","control","protocol","metrics","observability"]` | EDC endpoints exposed by this ingress resource |
| tractusx-connector.controlplane.ingresses[0].hostname | string | `"materialpass.dev.demo.catena-x.net"` | The hostname to be used to precisely map incoming traffic onto the underlying network service |
| tractusx-connector.controlplane.ingresses[0].tls | object | `{"enabled":true,"secretName":"tls-secret"}` | TLS [tls class](https://kubernetes.io/docs/concepts/services-networking/ingress/#tls) applied to the ingress resource |
| tractusx-connector.controlplane.ingresses[0].tls.enabled | bool | `true` | Enables TLS on the ingress resource |
| tractusx-connector.controlplane.ingresses[0].tls.secretName | string | `"tls-secret"` | If present overwrites the default secret name |
| tractusx-connector.controlplane.ingresses[1].annotations | object | `{}` | Additional ingress annotations to add |
| tractusx-connector.controlplane.ingresses[1].certManager.clusterIssuer | string | `""` | If preset enables certificate generation via cert-manager cluster-wide issuer |
| tractusx-connector.controlplane.ingresses[1].certManager.issuer | string | `""` | If preset enables certificate generation via cert-manager namespace scoped issuer |
| tractusx-connector.controlplane.ingresses[1].className | string | `"nginx"` | Defines the [ingress class](https://kubernetes.io/docs/concepts/services-networking/ingress/#ingress-class)  to use |
| tractusx-connector.controlplane.ingresses[1].enabled | bool | `false` |  |
| tractusx-connector.controlplane.ingresses[1].endpoints | list | `["management","control"]` | EDC endpoints exposed by this ingress resource |
| tractusx-connector.controlplane.ingresses[1].hostname | string | `"edc-control.intranet"` | The hostname to be used to precisely map incoming traffic onto the underlying network service |
| tractusx-connector.controlplane.ingresses[1].tls | object | `{"enabled":true,"secretName":"tls-secret"}` | TLS [tls class](https://kubernetes.io/docs/concepts/services-networking/ingress/#tls) applied to the ingress resource |
| tractusx-connector.controlplane.ingresses[1].tls.enabled | bool | `true` | Enables TLS on the ingress resource |
| tractusx-connector.controlplane.ingresses[1].tls.secretName | string | `"tls-secret"` | If present overwrites the default secret name |
| tractusx-connector.controlplane.initContainers | list | `[]` |  |
| tractusx-connector.controlplane.internationalDataSpaces.catalogId | string | `"TXDC-Catalog"` |  |
| tractusx-connector.controlplane.internationalDataSpaces.curator | string | `""` |  |
| tractusx-connector.controlplane.internationalDataSpaces.description | string | `"Tractus-X Eclipse IDS Data Space Connector"` |  |
| tractusx-connector.controlplane.internationalDataSpaces.id | string | `"TXDC"` |  |
| tractusx-connector.controlplane.internationalDataSpaces.maintainer | string | `""` |  |
| tractusx-connector.controlplane.internationalDataSpaces.title | string | `""` |  |
| tractusx-connector.controlplane.livenessProbe.enabled | bool | `true` | Whether to enable kubernetes [liveness-probe](https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/) |
| tractusx-connector.controlplane.livenessProbe.failureThreshold | int | `6` | when a probe fails kubernetes will try 6 times before giving up |
| tractusx-connector.controlplane.livenessProbe.initialDelaySeconds | int | `30` | seconds to wait before performing the first liveness check |
| tractusx-connector.controlplane.livenessProbe.periodSeconds | int | `10` | this fields specifies that kubernetes should perform a liveness check every 10 seconds |
| tractusx-connector.controlplane.livenessProbe.successThreshold | int | `1` | number of consecutive successes for the probe to be considered successful after having failed |
| tractusx-connector.controlplane.livenessProbe.timeoutSeconds | int | `5` | number of seconds after which the probe times out |
| tractusx-connector.controlplane.logging | string | `".level=INFO\norg.eclipse.edc.level=ALL\nhandlers=java.util.logging.ConsoleHandler\njava.util.logging.ConsoleHandler.formatter=java.util.logging.SimpleFormatter\njava.util.logging.ConsoleHandler.level=ALL\njava.util.logging.SimpleFormatter.format=[%1$tY-%1$tm-%1$td %1$tH:%1$tM:%1$tS] [%4$-7s] %5$s%6$s%n"` | configuration of the [Java Util Logging Facade](https://docs.oracle.com/javase/7/docs/technotes/guides/logging/overview.html) |
| tractusx-connector.controlplane.nodeSelector | object | `{}` |  |
| tractusx-connector.controlplane.opentelemetry | string | `"otel.javaagent.enabled=false\notel.javaagent.debug=false"` | configuration of the [Open Telemetry Agent](https://opentelemetry.io/docs/instrumentation/java/automatic/agent-config/) to collect and expose metrics |
| tractusx-connector.controlplane.podAnnotations | object | `{}` | additional annotations for the pod |
| tractusx-connector.controlplane.podLabels | object | `{}` | additional labels for the pod |
| tractusx-connector.controlplane.podSecurityContext | object | `{"fsGroup":10001,"runAsGroup":10001,"runAsUser":10001,"seccompProfile":{"type":"RuntimeDefault"}}` | The [pod security context](https://kubernetes.io/docs/tasks/configure-pod-container/security-context/#set-the-security-context-for-a-pod) defines privilege and access control settings for a Pod within the deployment |
| tractusx-connector.controlplane.podSecurityContext.fsGroup | int | `10001` | The owner for volumes and any files created within volumes will belong to this guid |
| tractusx-connector.controlplane.podSecurityContext.runAsGroup | int | `10001` | Processes within a pod will belong to this guid |
| tractusx-connector.controlplane.podSecurityContext.runAsUser | int | `10001` | Runs all processes within a pod with a special uid |
| tractusx-connector.controlplane.podSecurityContext.seccompProfile.type | string | `"RuntimeDefault"` | Restrict a Container's Syscalls with seccomp |
| tractusx-connector.controlplane.readinessProbe.enabled | bool | `true` | Whether to enable kubernetes [readiness-probes](https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/) |
| tractusx-connector.controlplane.readinessProbe.failureThreshold | int | `6` | when a probe fails kubernetes will try 6 times before giving up |
| tractusx-connector.controlplane.readinessProbe.initialDelaySeconds | int | `30` | seconds to wait before performing the first readiness check |
| tractusx-connector.controlplane.readinessProbe.periodSeconds | int | `10` | this fields specifies that kubernetes should perform a readiness check every 10 seconds |
| tractusx-connector.controlplane.readinessProbe.successThreshold | int | `1` | number of consecutive successes for the probe to be considered successful after having failed |
| tractusx-connector.controlplane.readinessProbe.timeoutSeconds | int | `5` | number of seconds after which the probe times out |
| tractusx-connector.controlplane.replicaCount | int | `1` |  |
| tractusx-connector.controlplane.resources | object | `{}` | [resource management](https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/) for the container |
| tractusx-connector.controlplane.securityContext.allowPrivilegeEscalation | bool | `false` | Controls [Privilege Escalation](https://kubernetes.io/docs/concepts/security/pod-security-policy/#privilege-escalation) enabling setuid binaries changing the effective user ID |
| tractusx-connector.controlplane.securityContext.capabilities.add | list | `[]` | Specifies which capabilities to add to issue specialized syscalls |
| tractusx-connector.controlplane.securityContext.capabilities.drop | list | `["ALL"]` | Specifies which capabilities to drop to reduce syscall attack surface |
| tractusx-connector.controlplane.securityContext.readOnlyRootFilesystem | bool | `true` | Whether the root filesystem is mounted in read-only mode |
| tractusx-connector.controlplane.securityContext.runAsNonRoot | bool | `true` | Requires the container to run without root privileges |
| tractusx-connector.controlplane.securityContext.runAsUser | int | `10001` | The container's process will run with the specified uid |
| tractusx-connector.controlplane.service.annotations | object | `{}` |  |
| tractusx-connector.controlplane.service.type | string | `"ClusterIP"` | [Service type](https://kubernetes.io/docs/concepts/services-networking/service/#publishing-services-service-types) to expose the running application on a set of Pods as a network service. |
| tractusx-connector.controlplane.tolerations | list | `[]` |  |
| tractusx-connector.controlplane.url.ids | string | `""` | Explicitly declared url for reaching the ids api (e.g. if ingresses not used) |
| tractusx-connector.controlplane.volumeMounts | list | `[]` | declare where to mount [volumes](https://kubernetes.io/docs/concepts/storage/volumes/) into the container |
| tractusx-connector.controlplane.volumes | list | `[]` | [volume](https://kubernetes.io/docs/concepts/storage/volumes/) directories |
| tractusx-connector.customLabels | object | `{}` |  |
| tractusx-connector.daps.clientId | string | `"<path:material-pass/data/dev/edc/oauth#client.id>"` |  |
| tractusx-connector.daps.connectors[0].attributes.referringConnector | string | `"https://materialpass.dev.demo.catena-x.net/consumer/<path:material-pass/data/dev/edc/participant#bpnNumber>"` |  |
| tractusx-connector.daps.connectors[0].certificate | string | `"<path:material-pass/data/daps-crt-dev#content>"` |  |
| tractusx-connector.daps.connectors[0].id | string | `"<path:material-pass/data/dev/edc/oauth#client.id>"` |  |
| tractusx-connector.daps.connectors[0].name | string | `"edcconector"` |  |
| tractusx-connector.daps.fullnameOverride | string | `"daps"` |  |
| tractusx-connector.daps.paths.jwks | string | `"/.well-known/jwks.json"` |  |
| tractusx-connector.daps.paths.token | string | `"/token"` |  |
| tractusx-connector.daps.url | string | `"https://daps1.int.demo.catena-x.net"` |  |
| tractusx-connector.dataplane.affinity | object | `{}` |  |
| tractusx-connector.dataplane.autoscaling.enabled | bool | `false` | Enables [horizontal pod autoscaling](https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/) |
| tractusx-connector.dataplane.autoscaling.maxReplicas | int | `100` | Maximum replicas if resource consumption exceeds resource threshholds |
| tractusx-connector.dataplane.autoscaling.minReplicas | int | `1` | Minimal replicas if resource consumption falls below resource threshholds |
| tractusx-connector.dataplane.autoscaling.targetCPUUtilizationPercentage | int | `80` | targetAverageUtilization of cpu provided to a pod |
| tractusx-connector.dataplane.autoscaling.targetMemoryUtilizationPercentage | int | `80` | targetAverageUtilization of memory provided to a pod |
| tractusx-connector.dataplane.aws.accessKeyId | string | `""` |  |
| tractusx-connector.dataplane.aws.endpointOverride | string | `""` |  |
| tractusx-connector.dataplane.aws.secretAccessKey | string | `""` |  |
| tractusx-connector.dataplane.debug.enabled | bool | `false` |  |
| tractusx-connector.dataplane.debug.port | int | `1044` |  |
| tractusx-connector.dataplane.debug.suspendOnStart | bool | `false` |  |
| tractusx-connector.dataplane.enabled | bool | `true` |  |
| tractusx-connector.dataplane.endpoints.control.path | string | `"/BPNL000000000000/api/dataplane/control"` |  |
| tractusx-connector.dataplane.endpoints.control.port | int | `8083` |  |
| tractusx-connector.dataplane.endpoints.default.path | string | `"/BPNL000000000000/api"` |  |
| tractusx-connector.dataplane.endpoints.default.port | int | `8080` |  |
| tractusx-connector.dataplane.endpoints.metrics.path | string | `"/BPNL000000000000/metrics"` |  |
| tractusx-connector.dataplane.endpoints.metrics.port | int | `9090` |  |
| tractusx-connector.dataplane.endpoints.observability.insecure | bool | `true` | allow or disallow insecure access, i.e. access without authentication |
| tractusx-connector.dataplane.endpoints.observability.path | string | `"/BPNL000000000000/observability"` | observability api, provides /health /readiness and /liveness endpoints |
| tractusx-connector.dataplane.endpoints.observability.port | int | `8085` | port for incoming API calls |
| tractusx-connector.dataplane.endpoints.proxy.path | string | `"/BPNL000000000000/proxy"` |  |
| tractusx-connector.dataplane.endpoints.proxy.port | int | `8186` |  |
| tractusx-connector.dataplane.endpoints.public.path | string | `"/BPNL000000000000/api/public"` |  |
| tractusx-connector.dataplane.endpoints.public.port | int | `8081` |  |
| tractusx-connector.dataplane.env | object | `{}` |  |
| tractusx-connector.dataplane.envConfigMapNames | list | `[]` |  |
| tractusx-connector.dataplane.envSecretNames | list | `[]` |  |
| tractusx-connector.dataplane.envValueFrom | object | `{}` |  |
| tractusx-connector.dataplane.image.pullPolicy | string | `"IfNotPresent"` | [Kubernetes image pull policy](https://kubernetes.io/docs/concepts/containers/images/#image-pull-policy) to use |
| tractusx-connector.dataplane.image.repository | string | `"tractusx/edc-dataplane-hashicorp-vault"` | Which derivate of the data plane to use. when left empty the deployment will select the correct image automatically |
| tractusx-connector.dataplane.image.tag | string | `"0.4.1"` | Overrides the image tag whose default is the chart appVersion |
| tractusx-connector.dataplane.ingresses[0].annotations | object | `{}` | Additional ingress annotations to add |
| tractusx-connector.dataplane.ingresses[0].certManager.clusterIssuer | string | `""` | If preset enables certificate generation via cert-manager cluster-wide issuer |
| tractusx-connector.dataplane.ingresses[0].certManager.issuer | string | `""` | If preset enables certificate generation via cert-manager namespace scoped issuer |
| tractusx-connector.dataplane.ingresses[0].className | string | `"nginx"` | Defines the [ingress class](https://kubernetes.io/docs/concepts/services-networking/ingress/#ingress-class)  to use |
| tractusx-connector.dataplane.ingresses[0].enabled | bool | `true` |  |
| tractusx-connector.dataplane.ingresses[0].endpoints | list | `["public"]` | EDC endpoints exposed by this ingress resource |
| tractusx-connector.dataplane.ingresses[0].hostname | string | `"materialpass.dev.demo.catena-x.net"` | The hostname to be used to precisely map incoming traffic onto the underlying network service |
| tractusx-connector.dataplane.ingresses[0].tls | object | `{"enabled":true,"secretName":"tls-secret"}` | TLS [tls class](https://kubernetes.io/docs/concepts/services-networking/ingress/#tls) applied to the ingress resource |
| tractusx-connector.dataplane.ingresses[0].tls.enabled | bool | `true` | Enables TLS on the ingress resource |
| tractusx-connector.dataplane.ingresses[0].tls.secretName | string | `"tls-secret"` | If present overwrites the default secret name |
| tractusx-connector.dataplane.initContainers | list | `[]` |  |
| tractusx-connector.dataplane.livenessProbe.enabled | bool | `true` | Whether to enable kubernetes [liveness-probe](https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/) |
| tractusx-connector.dataplane.livenessProbe.failureThreshold | int | `6` | when a probe fails kubernetes will try 6 times before giving up |
| tractusx-connector.dataplane.livenessProbe.initialDelaySeconds | int | `30` | seconds to wait before performing the first liveness check |
| tractusx-connector.dataplane.livenessProbe.periodSeconds | int | `10` | this fields specifies that kubernetes should perform a liveness check every 10 seconds |
| tractusx-connector.dataplane.livenessProbe.successThreshold | int | `1` | number of consecutive successes for the probe to be considered successful after having failed |
| tractusx-connector.dataplane.livenessProbe.timeoutSeconds | int | `5` | number of seconds after which the probe times out |
| tractusx-connector.dataplane.logging | string | `".level=INFO\norg.eclipse.edc.level=ALL\nhandlers=java.util.logging.ConsoleHandler\njava.util.logging.ConsoleHandler.formatter=java.util.logging.SimpleFormatter\njava.util.logging.ConsoleHandler.level=ALL\njava.util.logging.SimpleFormatter.format=[%1$tY-%1$tm-%1$td %1$tH:%1$tM:%1$tS] [%4$-7s] %5$s%6$s%n"` | configuration of the [Java Util Logging Facade](https://docs.oracle.com/javase/7/docs/technotes/guides/logging/overview.html) |
| tractusx-connector.dataplane.nodeSelector | object | `{}` |  |
| tractusx-connector.dataplane.opentelemetry | string | `"otel.javaagent.enabled=false\notel.javaagent.debug=false"` | configuration of the [Open Telemetry Agent](https://opentelemetry.io/docs/instrumentation/java/automatic/agent-config/) to collect and expose metrics |
| tractusx-connector.dataplane.podAnnotations | object | `{}` | additional annotations for the pod |
| tractusx-connector.dataplane.podLabels | object | `{}` | additional labels for the pod |
| tractusx-connector.dataplane.podSecurityContext | object | `{"fsGroup":10001,"runAsGroup":10001,"runAsUser":10001,"seccompProfile":{"type":"RuntimeDefault"}}` | The [pod security context](https://kubernetes.io/docs/tasks/configure-pod-container/security-context/#set-the-security-context-for-a-pod) defines privilege and access control settings for a Pod within the deployment |
| tractusx-connector.dataplane.podSecurityContext.fsGroup | int | `10001` | The owner for volumes and any files created within volumes will belong to this guid |
| tractusx-connector.dataplane.podSecurityContext.runAsGroup | int | `10001` | Processes within a pod will belong to this guid |
| tractusx-connector.dataplane.podSecurityContext.runAsUser | int | `10001` | Runs all processes within a pod with a special uid |
| tractusx-connector.dataplane.podSecurityContext.seccompProfile.type | string | `"RuntimeDefault"` | Restrict a Container's Syscalls with seccomp |
| tractusx-connector.dataplane.readinessProbe.enabled | bool | `true` | Whether to enable kubernetes [readiness-probes](https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/) |
| tractusx-connector.dataplane.readinessProbe.failureThreshold | int | `6` | when a probe fails kubernetes will try 6 times before giving up |
| tractusx-connector.dataplane.readinessProbe.initialDelaySeconds | int | `30` | seconds to wait before performing the first readiness check |
| tractusx-connector.dataplane.readinessProbe.periodSeconds | int | `10` | this fields specifies that kubernetes should perform a liveness check every 10 seconds |
| tractusx-connector.dataplane.readinessProbe.successThreshold | int | `1` | number of consecutive successes for the probe to be considered successful after having failed |
| tractusx-connector.dataplane.readinessProbe.timeoutSeconds | int | `5` | number of seconds after which the probe times out |
| tractusx-connector.dataplane.replicaCount | int | `1` |  |
| tractusx-connector.dataplane.resources | object | `{}` | [resource management](https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/) for the container |
| tractusx-connector.dataplane.securityContext.allowPrivilegeEscalation | bool | `false` | Controls [Privilege Escalation](https://kubernetes.io/docs/concepts/security/pod-security-policy/#privilege-escalation) enabling setuid binaries changing the effective user ID |
| tractusx-connector.dataplane.securityContext.capabilities.add | list | `[]` | Specifies which capabilities to add to issue specialized syscalls |
| tractusx-connector.dataplane.securityContext.capabilities.drop | list | `["ALL"]` | Specifies which capabilities to drop to reduce syscall attack surface |
| tractusx-connector.dataplane.securityContext.readOnlyRootFilesystem | bool | `true` | Whether the root filesystem is mounted in read-only mode |
| tractusx-connector.dataplane.securityContext.runAsNonRoot | bool | `true` | Requires the container to run without root privileges |
| tractusx-connector.dataplane.securityContext.runAsUser | int | `10001` | The container's process will run with the specified uid |
| tractusx-connector.dataplane.service.port | int | `80` |  |
| tractusx-connector.dataplane.service.type | string | `"ClusterIP"` | [Service type](https://kubernetes.io/docs/concepts/services-networking/service/#publishing-services-service-types) to expose the running application on a set of Pods as a network service. |
| tractusx-connector.dataplane.tolerations | list | `[]` |  |
| tractusx-connector.dataplane.url.public | string | `""` | Explicitly declared url for reaching the public api (e.g. if ingresses not used) |
| tractusx-connector.dataplane.volumeMounts | list | `[]` | declare where to mount [volumes](https://kubernetes.io/docs/concepts/storage/volumes/) into the container |
| tractusx-connector.dataplane.volumes | list | `[]` | [volume](https://kubernetes.io/docs/concepts/storage/volumes/) directories |
| tractusx-connector.enabled | bool | `true` |  |
| tractusx-connector.fullnameOverride | string | `"dpp-edc-provider"` |  |
| tractusx-connector.idsdaps.connectors[0].certificate | string | `"<path:material-pass/data/ids-daps_crt#content>"` |  |
| tractusx-connector.imagePullSecrets | list | `[]` |  |
| tractusx-connector.install.daps | bool | `false` |  |
| tractusx-connector.install.postgresql | bool | `false` |  |
| tractusx-connector.install.vault | bool | `false` |  |
| tractusx-connector.nameOverride | string | `""` |  |
| tractusx-connector.participant.id | string | `"<path:material-pass/data/dev/edc/participant#bpnNumber>"` |  |
| tractusx-connector.postgresql.auth.database | string | `"edc"` |  |
| tractusx-connector.postgresql.auth.password | string | `"<path:material-pass/data/dev/edc/database#user>"` |  |
| tractusx-connector.postgresql.auth.username | string | `"<path:material-pass/data/dev/edc/database#user>"` |  |
| tractusx-connector.postgresql.fullnameOverride | string | `"postgresql"` |  |
| tractusx-connector.postgresql.jdbcUrl | string | `"jdbc:postgresql://postgresqlprovider:5432/edc"` |  |
| tractusx-connector.postgresql.password | string | `"<path:material-pass/data/dev/edc/database#user>"` |  |
| tractusx-connector.postgresql.username | string | `"<path:material-pass/data/dev/edc/database#user>"` |  |
| tractusx-connector.serviceAccount.annotations | object | `{}` |  |
| tractusx-connector.serviceAccount.create | bool | `true` |  |
| tractusx-connector.serviceAccount.imagePullSecrets | list | `[]` | Existing image pull secret bound to the service account to use to [obtain the container image from private registries](https://kubernetes.io/docs/concepts/containers/images/#using-a-private-registry) |
| tractusx-connector.serviceAccount.name | string | `""` |  |
| tractusx-connector.vault.fullnameOverride | string | `"vault"` |  |
| tractusx-connector.vault.hashicorp.healthCheck.enabled | bool | `true` |  |
| tractusx-connector.vault.hashicorp.healthCheck.standbyOk | bool | `true` |  |
| tractusx-connector.vault.hashicorp.paths.health | string | `"/v1/sys/health"` |  |
| tractusx-connector.vault.hashicorp.paths.secret | string | `"<path:material-pass/data/dev/edc/vault#vault.hashicorp.api.secret.path>"` |  |
| tractusx-connector.vault.hashicorp.timeout | int | `30` |  |
| tractusx-connector.vault.hashicorp.token | string | `"<path:material-pass/data/dev/edc/vault#vault.hashicorp.token>"` |  |
| tractusx-connector.vault.hashicorp.url | string | `"<path:material-pass/data/dev/edc/vault#vault.hashicorp.url>"` |  |
| tractusx-connector.vault.injector.enabled | bool | `false` |  |
| tractusx-connector.vault.secretNames.dapsPrivateKey | string | `"daps-key-dev"` |  |
| tractusx-connector.vault.secretNames.dapsPublicKey | string | `"daps-crt-dev"` |  |
| tractusx-connector.vault.secretNames.transferProxyTokenEncryptionAesKey | string | `"edc-encryption-key"` |  |
| tractusx-connector.vault.secretNames.transferProxyTokenSignerPrivateKey | string | `"daps-key-dev"` |  |
| tractusx-connector.vault.secretNames.transferProxyTokenSignerPublicKey | string | `"daps-crt-dev"` |  |
| tractusx-connector.vault.server.dev.devRootToken | string | `"root"` |  |
| tractusx-connector.vault.server.dev.enabled | bool | `true` |  |
| tractusx-connector.vault.server.postStart | string | `nil` |  |

----------------------------------------------
Autogenerated from chart metadata using [helm-docs v1.11.0](https://github.com/norwoodj/helm-docs/releases/v1.11.0)