/*
	FileName: Increment.ts
	Written By: idk
	File Type: Module
	Description: Increment a single counter

	All commits will be made on behalf of mfd-co to https://github.com/mfd-core/sitetest4.robloxlabs.com

	***

	Copyright 2006-2021 ROBLOX

	Licensed under the Apache License, Version 2.0 (the "License");
	you may not use this file except in compliance with the License.
	You may obtain a copy of the License at

	https://www.apache.org/licenses/LICENSE-2.0

	Unless required by applicable law or agreed to in writing, software
	distributed under the License is distributed on an "AS IS" BASIS,
	WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	See the License for the specific language governing permissions and
	limitations under the License.

	***
*/

import { FASTLOGS, FLog, LOGGROUP } from '../../../../../Helpers/WebHelpers/Roblox.Util/Roblox.Util.FastLog';

LOGGROUP('EphemeralCounters');

export default {
	method: 'all',
	func: (_req: any, res: { send: (arg0: { success: boolean; message: string }) => void }): void => {
		FASTLOGS(FLog['EphemeralCounters'], '[FLog::EphemeralCounters] %s', JSON.stringify(_req.query));
		FASTLOGS(FLog['EphemeralCounters'], '[FLog::EphemeralCounters] %s', JSON.stringify(_req.body));
		res.send({ success: true, message: '' });
	},
};
