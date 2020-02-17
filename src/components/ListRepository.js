import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'antd';

const ListRepository = props => (
    <ul>
        <List
            header={<div>List Repository</div>}
            bordered
            dataSource={props.repos}
            renderItem={item => (
                <List.Item>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                </List.Item>
            )}
        />
    </ul>
);

ListRepository.propTypes = {
    repos: PropTypes.array.isRequired,
};

export default ListRepository;
