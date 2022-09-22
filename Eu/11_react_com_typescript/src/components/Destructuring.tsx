import React from 'react'

type Props = {
  title: string;
  content: string;
  commentQnt: number;
  tags: string[];
  category: Category;
}

export enum Category {
  JS = 'JavasCript',
  TS = 'TypeScript',
  P = 'Python'
}

const Destructuring = ({title, content, commentQnt, tags, category}: Props) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
      <p>Quantidade de comentários: {commentQnt}</p>
      <div>
        {tags.map((tag,i) => <p key={i}>#{tag}</p>)}
      </div>
      <p>Categoria: {category}</p>
    </div>
  )
}

export default Destructuring