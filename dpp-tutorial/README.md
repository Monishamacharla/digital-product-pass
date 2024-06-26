<!--
  Tractus-X - Digital Product Passport Application
 
  Copyright (c) 2022, 2024 BMW AG, Henkel AG & Co. KGaA
  Copyright (c) 2023, 2024 CGI Deutschland B.V. & Co. KG
  Copyright (c) 2022, 2024 Contributors to the Eclipse Foundation
 
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

<div align=right><img height=200 src="../docs/media/dpp-tx-logo.png"/>&nbsp;&nbsp;<h1>Tractus-X​ Digital Product Passport​ Workstream​</h1><h4>Second Tractus-X Community Days - 16, 17 May 2024 - Stuttgart</h4></div>


## Description

The digital product passport application provides a consumer user interface to request a battery passport from a battery manufacturer using the standardized components and technologies in Catena-X network. The passport will be displayed in a human-readable form from any browser. The data exchange standards given by Catena-X are used to provide the battery passport to different personas (roles) in the network.

In particular, the appliction is used to access the battery passport data provided by battery manufacturer. By scanning QR-code or knowing the manufacturer and battery-ID, a user can request the passport  through **Eclipse Dataspace Connectors (EDCs)** over the Catena-X network. The passport provider will provide data attributes that is only visible to a permitted signed-in user. 

## Problem Statement

Company-X has manufactured cars for the market in Germany. The cars were built using components from different companies. A surprise inspection is scheduled by a governmental environment auditor in 5 months. This generates a problem for Company-X, because not all the data from the parts are available. Company-X sends an email to their supplier companies, however they send incomplete data in different formats and structures, which confuses Company-X engineers when calculating the carbon footprint and makes the compliance to the regulations really complicated. It is hard to keep track from the latest regulations and convince supplier companies to give all their data without loosing control over it. So, the engineers decide to use Catena-X for the data exchange. Per email Company-X requests its suppliers to provide the data while still maintaining data sovereignty, simply by following the Catena-X standards for the Digital Product Passport which comply with the regulations of the inspection. ​

You are one of the suppliers from Company-X. To maintain your client, you are required to create a Digital Product Pass for your Part, so that Company-X can  obtain the total PCF value from its car. Create a Car Digital Product Pass to fulfill the sustainability regulations imposed in the inspection.

## Pre-Requisites

  * Kubernetes 1.19+
  * Helm 3.2.0+
  * PV provisioner support in the underlying infrastructure
  * MXD Components:
        2 EDCs (Provider + Consumer)
        1 Keycloak
        1 Vault
  * BPN Discovery Service
  * EDC Discovery Service
  * Discovery Service
  * Printer (for printing QR codes)
  * Mobile Phone with Browser (for scanning QR codes) 


## Preparation

Split into groups of five individuals, ensuring each group receives a sheet of paper containing a distinct part from the  [test-data](./resources/test-data/carParts.json).

## Phase 1: Deployment 

> [!NOTE] 
> The deployment of the [Digital Product Passport application](./deployment.md) is not within the scope of the Workshop, as it has already been deployed for you.

## Phase 2: Data Provision 

In this Phase, you as a provider will create a Digital Product Passport of a spectific part of the Arena-X Car. For this phase, you can use your own computer through Visual Studio Code / Notepad ++ or a given Virtual Machine.

##### Duration: 45 mins

#### Step 1 - Create a Digital Product Passport (DPP) 

In this step, you'll create the Digital Product Passport (DPP) by utilizing data from the Product Carbon Footprint and specifications of a specific car part from the Arena. 
   
  * Follow the tutorial on [How to create Aspect Model](./aspect-model.md) 

#### Step 2 - Create a Digital Twin integrating the generated DPP as a submodel

In this step, you will create a Digital Twin of your provided Car part. 

  * Follow the tutorial on [How to create a Digital Twin](./data-provision.md)

#### Step 3 - Upload the Digital Twin in the Digital Twin Registry
   
Provide the Digital Twin and its relations in the Digital Twin Registry.

* UUID
* Part Instance ID
   * Manufacturer Part ID
   * Submodel Reference

#### Step 4 - Generate the QR Code

  * Follow the tutorial on [How to generate a QR code](./qr-code.md)
   
#### Step 5 - Print the QR-Code 

Print the QR Code from the nearby printer and paste it in the specific Part in the Arena-X. Ensure that the QR code is securely attached and easily scannable. Test the scanning functionality to verify that the encoded information can be retrieved accurately.

Great! The data provisioning process has been successfully set up. It is now ready for data exchange within the dataspace. This means that all necessary configurations and integrations have been completed, ensuring efficient data sharing.

## Phase 3: Data Consumption

In this phase, you as a consumer, will access the Digital Product Pass (DPP) consumer application and retrieve data from the network by either scanning a QR code or entering an ID.

##### Duration: 45 mins

#### Step 1 - Consumption - Access DPP Application

  * Follow the tutorial on [DPP Data Consumption](./data-consumption.md)

    * You can access the application by using URL and the credentials. 

    * Scan the available QR Codes on the Car parts or provide the ID. 

    * Upon scanning, you will obtain the passport of the part. 

    * Access the UI of the passport to view its details.

    * Look for the Product Carbon Footprint (PCF) information for each of the specific car part
   
    * Calculate and add up the PCF values of all individual parts to obtain the aggregate Carbon Footprint value for the entire car.
    
####  Step 2 - Creating the Final Digital Product Passport (DPP) for the Whole Car

   * Scan the available QR codes from various parts of the car and record the Product Carbon Footprint (PCF) value of each specific part.

* #### Compile the following information to create the DPP:

   * Name: Provide a name for the car model.
   * Description: Include a brief description of the car, its features, and specifications.
   * ID: Assign a unique identifier for the car.
   * Aggregate Value: Calculate and add up the PCF values of all individual parts to obtain the aggregate carbon footprint value for the entire car.
 
## Links

| How to Guides | Link |
| -------- | ----- |
| How to deploy DPP Application | [deployment.md](./deployment.md) |
| How to create Aspect Model | [aspect-model.md](./aspect-model.md) |
| How to create a Digital Twin | [data-provision.md](./data-provision.md) |
| How to generate a QR code | [qr-code.md](./qr-code.md) |
| DPP Data Consumption | [data-consumption.md](./data-consumption.md) |

## NOTICE

This work is licensed under the [CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/legalcode).

- SPDX-License-Identifier: CC-BY-4.0
- SPDX-FileCopyrightText: 2023, 2024 BMW AG
- SPDX-FileCopyrightText: 2023, 2024 CGI Deutschland B.V. & Co. KG
- SPDX-FileCopyrightText: 2024 Contributors to the Eclipse Foundation
- Source URL: https://github.com/eclipse-tractusx/digital-product-pass
