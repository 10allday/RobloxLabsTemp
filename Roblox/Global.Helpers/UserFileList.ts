/*
	FileName: UsePages.ts
	Written By: Nikita Nikolaevich Petko
	File Type: Module
	Description: Essentially just Express.static

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

import { Express as IApplicationBuilder } from 'express-serve-static-core';
import Pages from 'serve-index';
import { _dirname } from '../Helpers/Constants/Directories';
import fs from 'fs';
import { FASTLOGS, FLog, LOGGROUP } from '../Helpers/WebHelpers/Roblox.Util/Roblox.Util.FastLog';

interface PageDirOpts {
	path?: string;
}

LOGGROUP('Pages');

const UseFileList = (app: IApplicationBuilder, opts: PageDirOpts): Promise<void> => {
	return new Promise((r) => {
		const path = (opts !== undefined ? opts.path : _dirname + '\\StaticPages') || _dirname + '\\StaticPages';
		if (!fs.existsSync(path)) {
			FASTLOGS(
				FLog['Pages'],
				`[FLog::Pages] The directory %s was not found, make sure you configured your listing directory correctly. Static pages, so this will that return ctx::resumeFunc()`,
				path,
			);
			console.error(
				'The directory %s was not found, make sure you configured your listing directory correctly. Static pages, so this will that return ctx::resumeFunc()',
			);
		}
		app.use('/', Pages(path + '\\listings', { icons: true }));
		r();
	});
};
export default UseFileList;
