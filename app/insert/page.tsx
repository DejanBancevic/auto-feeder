"use client"

import React, { useState } from 'react';
import Layout from '../components/Layout';
import Router from 'next/router';

const Insert: React.FC = () => {
  const [name, setTitle] = useState('');
  const [recipe, setContent] = useState('');
  const [ingredients, setingredients] = useState('ya');
  const [date, setdate] = useState('re');

  const submitData = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      const body = { name, recipe, ingredients, date };
      await fetch('/api/post', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      //await Router.push('/drafts');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Layout>
      <div>
        <form onSubmit={submitData}>
          <h1>New Draft</h1>
          <input
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            type="text"
            value={name}
          />
          <textarea
            cols={50}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Content"
            rows={8}
            value={recipe}
          />
          <input disabled={!recipe || !name} type="submit" value="Create" />
          <a className="back" href="#" onClick={() => Router.push('/')}>
            or Cancel
          </a>
        </form>
      </div>
      <style jsx>{`
        .page {
          background: var(--geist-background);
          padding: 3rem;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        input[type='text'],
        textarea {
          width: 100%;
          padding: 0.5rem;
          margin: 0.5rem 0;
          border-radius: 0.25rem;
          border: 0.125rem solid rgba(0, 0, 0, 0.2);
        }

        input[type='submit'] {
          background: #ececec;
          border: 0;
          padding: 1rem 2rem;
        }

        .back {
          margin-left: 1rem;
        }
      `}</style>
    </Layout>
  );
};

export default Insert;
