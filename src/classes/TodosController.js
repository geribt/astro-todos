const APIURL = 'https://app.nocodb.com/api/v2/tables/m2y1poahfe353qv/records';
const TOKEN = 'RkOxkSoUH8Grx1K_fotdFZetBb7akB69npnNQptz';

class TodosController {
    constructor() {
        this.apiUrl = APIURL;
        this.token = TOKEN;
    }

    async getAll() {
        const response = await fetch(`${this.apiUrl}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'xc-token': this.token
            }
        });

        return response.json();
    }

    async createItem(Nom,email,comentari) {
        const response = await fetch(`${this.apiUrl}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'xc-token': this.token
            },
            body: JSON.stringify({
                Nom: Nom,
                email: email,
                comentari: comentari
            })
        });

        const data = await response.json();
        return data;
    }

    async updateItem(id,Nom,email,comentari, newstatus) {
        const response = await fetch(`${this.apiUrl}/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'xc-token': this.token
            },
            body: JSON.stringify({
                Nom: Nom,
                email: email,
                comentari: comentari,
                Status: newstatus
            })
        });

        const data = await response.json();
        return data;
    }


    async getItemById(id) {
        const response = await fetch(`${this.apiUrl}/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'xc-token': this.token
            }
        });

        const data = await response.json();
        return data;
    }

    async deleteItem(id) {
        const response = await fetch(`${this.apiUrl}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'xc-token': this.token
            },
            body: JSON.stringify({
                Id: id
            })
        });

        const data = await response.json();
        return data;
    }
}


export default TodosController;
