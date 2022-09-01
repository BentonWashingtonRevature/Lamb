import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_REQUEST } from '../../utils/mutations';
import { QUERY_REQUESTS } from '../../utils/queries';
// import { QUERY_ME } from '../../utils/queries';

import Auth from '../../utils/auth';

const RequestForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [details, setDetails] = useState('');
    // const [category, setCategory] = useState('');

    const [addRequest, { error }] = useMutation(ADD_REQUEST, {
        update(cache, { data: { addRequest } }) {
            try {
                const { requests } = cache.readQuery({ query: QUERY_REQUESTS });

                cache.writeQuery({
                    query: QUERY_REQUESTS,
                    data: { requests: [addRequest, ...requests] },
                });
            } catch (e) {
                console.error(e);
            }

            // const { me } = cache.readQuery({ query: QUERY_ME });
            // cache.writeQuery({
            //     query: QUERY_ME,
            //     data: { me: { ...me, requests: [...me.requests, addRequest] } },
            // });
        },
    });

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await addRequest({
                variables: {
                    title,
                    description,
                    details,
                    // category,
                    requestAuthor: Auth.getProfile().data.username,
                },
            });
            // setCategory('');
            setTitle('');
            setDescription('');
            setDetails('');
        } catch (err) {
            console.error(err);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        if (name === 'description') {
            setDescription(value)
        }
        if (name === 'title') {
            setTitle(value)
        }
        if (name === 'details') {
            setDetails(value)
        }
        // if (name === 'category') {
        //     setCategory(value)
        // }
    };

    return (
        <div>
            <h3>What do you need help with?</h3>

            {Auth.loggedIn() ? (
                <>

                    <form
                        className='flex-row justify-center justify-space-between-md align-center'
                        onSubmit={handleFormSubmit}
                    >
                        <div className="col-12 col-lg-9">


                            <textarea
                                name="title"
                                placeholder="Title"
                                value={title}
                                className="form-input w-100"
                                style={{ lineHeight: '1.5', resize: 'vertical' }}
                                onChange={handleChange}
                            ></textarea>
                            <textarea
                                name="description"
                                placeholder="Description: What do you need?"
                                value={description}
                                className="form-input w-100"
                                style={{ lineHeight: '1.5', resize: 'vertical' }}
                                onChange={handleChange}
                            ></textarea>
                            <textarea
                                name="details"
                                placeholder="Details: Who? What? When? Where? Why? How?"
                                value={details}
                                className="form-input w-100"
                                style={{ lineHeight: '1.5', resize: 'vertical' }}
                                onChange={handleChange}
                            ></textarea>
                        </div>

                        <div className="col-12 col-lg-3">
                            <button className="btn btn-primary btn-block py-3" type="submit">
                                Add Request
                            </button>
                        </div>
                        {error && (
                            <div className="col-12 my-3 bg-danger text-white p-3">
                                {error.message}
                            </div>
                        )}



                    </form>
                </>

            ) : (
                <p>
                    You need to be logged in to add a request. Please{' '}
                    <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
                </p>
            )}
        </div>
    );
};

export default RequestForm;