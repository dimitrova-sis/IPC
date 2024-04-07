import { Observable } from 'rxjs'
import { ApiService } from './api.service'
import { Injectable } from '@angular/core'

@Injectable()
export class PersonService {
    object = 'person'

    constructor(private httpService: ApiService) { }

    create(model: any) {
        const resourceURL = `${this.object}`

        return this.httpService.post(resourceURL, model)
    }

    update(model: any) {
        const resourceURL = `${this.object}/update`

        return this.httpService.post(resourceURL, model)
    }

    delete(id: string) {
        const resourceURL = `${this.object}/${id}`

        return this.httpService.delete(resourceURL)
    }

    getById(id: string) {
        const resourceURL = `${this.object}/${id}`

        return this.httpService.get(resourceURL)
    }

    getAll(): Observable<any[]> {
        let resourceUrl = `${this.object}`

        return this.httpService.get(resourceUrl)
    }
}
