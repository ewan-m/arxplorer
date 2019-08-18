import React from 'react';
import './Search.css';
import { ArticleCard } from '../UiElements/ArticleCard';
import SearchBox from '../UiElements/SearchBox';
import Paginator from '../UiElements/Paginator';
import { parseArxivXml } from '../ApiCommunicationHelpers/parseArxivXml';
import { Article } from '../ApiCommunicationHelpers/models/Article';

export default class Search extends React.PureComponent {
    timeout: NodeJS.Timeout | null;
    state: { error: null, isLoaded: boolean, articles: Array<Article> };

    constructor(props: any) {
        super(props);
        this.timeout = null;
        this.state = {
            error: null,
            isLoaded: false,
            articles: []
        };
    }

    componentDidMount() {
        this.getArticlesMatching('science');
    }

    onSearchKeyUp(value: string) {
        if (this.timeout !== void 0 && this.timeout !== null) {
            clearTimeout(this.timeout);
        }

        this.timeout = setTimeout(() => {
            this.getArticlesMatching(value)
        }, 300);
    }

    getArticlesMatching(searchValue: string) {
        fetch("https://export.arxiv.org/api/query?search_query=all:" + searchValue)
            .then(res => res.text())
            .then(
                (result) => {

                    const articles = parseArxivXml(result).articles;
                    this.setState({
                        isLoaded: true,
                        articles: articles
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        return (
            <div>
                <div className="mb-3">
                    <SearchBox parent={this} />
                </div>
                <div className="row">
                    {this.state.articles
                        ? this.state.articles.map((article, index: number) =>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <ArticleCard key={index} id={index} article={article} />
                            </div>
                        ) : <div className="text-center">
                            <h2>
                                Nothing to see here governor!
                            </h2>
                        </div>}
                </div>
                <div>
                    <Paginator />
                </div>
            </div>
        );
    }
}