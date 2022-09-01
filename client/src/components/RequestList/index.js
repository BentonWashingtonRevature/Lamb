import React from 'react';
import { Link } from 'react-router-dom';

const RequestList = ({
    requests,
    title,
    showTitle = true,
    showUsername = true,
}) => {
    if (!requests.length) {
        return <h3>No Requests Yet</h3>;
    }

    return (
        <div>
            {showTitle && <h3>{title}</h3>}
            {requests &&
                requests.map((request) => (
                    <div key={request._id} className="card mb-3">
                        <h4 className="card-header bg-primary text-light p-2 m-0">
                            {showUsername ? (
                                <Link
                                    className="text-light"
                                    to={`/profiles/${request.requestAuthor}`}
                                >
                                    {request.requestAuthor} <br />
                                    <span style={{ fontSize: '1rem' }}>
                                        had this request on {request.createdAt}
                                    </span>
                                </Link>
                            ) : (
                                <>
                                    <span style={{ fontSize: '1rem' }}>
                                        You had this request on {request.createdAt}
                                    </span>
                                </>
                            )}
                        </h4>
                        <div className="card-body bg-light p-2">
                            <p>{request.title}:{request.description}</p>
                            <br/>
                            <p>Details: {request.details}</p>
                        </div>
                        <Link
                            className="btn btn-primary btn-block btn-squared"
                            to={`/requests/${request._id}`}
                        >
                            Join the discussion on this request.
                        </Link>
                    </div>
                ))}
        </div>
    );
};

export default RequestList;