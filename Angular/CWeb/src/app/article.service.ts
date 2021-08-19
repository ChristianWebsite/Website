
export class ArticleService{

    // this service will supply us with our articles from the backend restful service.
    // right now it just creates a list of strings
    getArticles(){
        return ["article 1", "article 2", "article 3"];
    }
}