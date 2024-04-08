import { Observable } from 'rxjs'
import { ApiService } from './api.service'
import { Injectable } from '@angular/core'

@Injectable()
export class PersonService {
    object = 'person'

    constructor(private httpService: ApiService) { }

    save(model: any, id: string | null = null) {
        if (id) {
            const resourceURL = `${this.object}/${id}`
            return this.httpService.patch(resourceURL, model)
        } else {
            const resourceURL = `${this.object}`
            return this.httpService.post(resourceURL, model)
        }
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
