import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

/**
 * Display an alert box.
 *
 * Props:
 * The text is expected to be translated.
 * Optional link should include url and title (which should be already translated too)
 *
 * Example:
 * <Explanation text={} link={{url: '', title: ''}}
 *
 */
type Link = {
    url: string;
    title: string;
    pdf: string;
};

type HelpBoxProps = {
    text: string;
    link: Link;
};

export const HelpBox = ({ text, link } : HelpBoxProps): JSX.Element => {
    return (
        <div className='align-content-center justify-content-between alert alert-info' role='alert'>
            <div className='d-flex'>
                <FontAwesomeIcon className='mt-1 mr-3' icon={faLightbulb} />
                <div>
                    {text}
                    <div className='mt-3'>
                        {link && link.url && link.title && (
                            <a href={link.url} className='alert-link' download={link.pdf}>
                                {link.title}
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

