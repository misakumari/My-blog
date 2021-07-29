import React from "react";
import articleContent from"./article-content";
import Articles  from "../Components/Articles";
import NotFound from "./NotFound";
const Article =({match}) =>{

    const name=match.params.name;
    const article=articleContent.find((article) => article.name===name);
    
    if(!article) return <NotFound />
    const OtherArticle=articleContent.filter(article => article.name!==name)
    return(
        <>
        <h1 className="sm:text-4xl text-2xl font-bold mt-6 mb-6 text-gray-998">
            {article.title}
        </h1>
        <p>
            {article.content.map((paragraph,index) =>(
                <p className="mx-auto leading-relaxed text-base mb-4" key={index}>{paragraph}</p>
            ))}
    </p>
    <h1 className="sm:text-2x text-xl font-bold mt-4 mb-4 text-gray-800">Other Articles</h1>
    <div className="flex flex-wrap -m-4">
        <Articles articles={OtherArticle} />
    </div>
    </>
    );
};
export default Article;