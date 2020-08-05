import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Table } from 'antd';
import PropTypes from 'prop-types';

import { doFetchStories } from '../actions/story';
import '../styles/stories.scss';

const StoriesComponent = ({ stories, isAdmin, onFetchStories }) => {
	const history = useHistory();

	useEffect(() => {
		onFetchStories();
	}, []);

	const onRowClick = async (record) => {
		if (isAdmin) {
			history.push(`/stories/${record.id}`);
		}
		return null;
	};

	const columns = [
		{
			title: 'Id',
			dataIndex: 'id',
			key: 'id',
			defaultSortOrder: 'ascend',
			sorter: (a, b) => a.id - b.id,
			sortDirections: ['descend', 'ascend'],
		},
		{
			title: 'Summary',
			dataIndex: 'summary',
			key: 'summary',
		},
		{
			title: 'Description',
			dataIndex: 'description',
			key: 'description',
		},
		{
			title: 'Type',
			dataIndex: 'type',
			key: 'type',
			filters: [
				{ text: 'Enhancement', value: 'enhancement' },
				{ text: 'Bugfix', value: 'bugfix' },
				{ text: 'Development', value: 'development' },
				{ text: 'QA', value: 'qa' },
			],
			onFilter: (value, record) => record.type.indexOf(value) === 0,
		},
		{
			title: 'Complexity',
			dataIndex: 'complexity',
			key: 'complexity',
			sorter: (a, b) => a.complexity.localeCompare(b.complexity),
			sortDirections: ['descend', 'ascend'],
		},
		{
			title: 'EstimatedHours',
			dataIndex: 'estimatedHrs',
			key: 'estimatedHrs',
		},
		{
			title: 'Cost',
			dataIndex: 'cost',
			key: 'cost',
		},
	];

	return (
		<div className="stories-section">
			<Table
				columns={columns}
				dataSource={stories}
				pagination={false}
				rowKey="id"
				onRow={(record, rowIndex) => ({
					onClick: () => {
						onRowClick(record);
					},
				})}
				rowClassName={(record, index) => {
					if (!record.status) return 'story-waiting';
					if (record.status === 'accepted') return 'story-accepted';
					if (record.status === 'rejected') return 'story-rejected';
				}}
				className="stories-table"
			/>
		</div>
	);
};

StoriesComponent.propTypes = {
	onFetchStories: PropTypes.func.isRequired,
	stories: PropTypes.arrayOf(PropTypes.object).isRequired,
	isAdmin: PropTypes.bool.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
	onFetchStories: (payload) => dispatch(doFetchStories(payload)),
});

const mapStateToProps = (state) => ({
	stories: state.storyState.stories,
	isAdmin: state.userState.isAdmin,
	userId: state.userState.user.id,
});

export default connect(mapStateToProps, mapDispatchToProps)(StoriesComponent);
