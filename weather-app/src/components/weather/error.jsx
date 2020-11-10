import React from 'react';
import { Message } from 'semantic-ui-react';
import PropTypes from 'prop-types';
const ErrorReport = (props) => {
    const { error } = props;
    const { position, message, code } = error;
    return (
        <div>
            <Message
                error
                icon="warning"
                header="A problem was encountered."
                content={`${message}.`}
            />
            {!position && (
                <p>
                    To resolve this problem, allow access to your geolocation.
                </p>
            )}
            {code === 3 && position === false && (
                <p>
                    Please respond to request for geolocation.</p>
            )}
            {position && (
                <p>
                    You may wish to seek support. Use the
                    <strong>
                        &nbsp;Contact Us&nbsp;
</strong>
link below.
                </p>
            )}
        </div>
    );
};
ErrorReport.propTypes = {
    error: PropTypes.shape({
        code: PropTypes.number.isRequired,
        message: PropTypes.string.isRequired,
        position: PropTypes.bool.isRequired,
    }).isRequired,
};
export default ErrorReport;