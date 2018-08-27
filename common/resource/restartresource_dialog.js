// Copyright 2017 The Kubernetes Authors.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import {RestartResourceController} from './restartresource_controller';

/**
 * @param {!md.$dialog} mdDialog
 * @param {string} resourceKindName
 * @param {string} resourceUrl
 * @param {!backendApi.ObjectMeta} objectMeta
 * @return {!angular.$q.Promise}
 */
export default function showRestartDialog(mdDialog, resourceKindName, resourceUrl, objectMeta) {
  return mdDialog.show({
    controller: RestartResourceController,
    controllerAs: '$ctrl',
    clickOutsideToClose: true,
    templateUrl: 'common/resource/restartresource.html',
    locals: {
      'resourceUrl': resourceUrl,
      'objectMeta': objectMeta,
      'resourceKindName': resourceKindName,
    },
  });
}
