// must be declared in module

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'buildUrl'})
export class BuildUrlPipe implements PipeTransform {
    transform(build,repository: string): string {
        return 'https://travis-ci.org/' + repository + '/builds/' + build.id
    }
}