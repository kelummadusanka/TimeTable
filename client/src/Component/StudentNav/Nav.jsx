import React, { useState } from 'react';
import { Flex, Text, IconButton, Divider, Avatar, Heading } from '@chakra-ui/react';
import {
	FiMenu,
	FiHome,
	FiCalendar,
	FiUser,
	FiDollarSign,
	FiBriefcase,
	FiSettings,
	FiHelpCircle,
	FiUploadCloud,
} from 'react-icons/fi';

import NavItem from './NavItem';
import { Link } from 'react-router-dom';

export default function StudentNav() {
	const [navSize, changeNavSize] = useState('large');
	return (
		<Flex
			pos='sticky'
			//left="5"
			h='full'
			boxShadow='0 4px 12px 0 rgba(0, 0, 0, 0.05)'
			borderRadius={navSize === 'small' ? '15px' : '30px'}
			//w={navSize == "small" ? "75px" : "200px"}
			w='full'
			flexDir='column'
			justifyContent='space-between'
		>
			<Flex p='5%' flexDir='column' w='100%' alignItems={navSize === 'small' ? 'center' : 'flex-start'} as='nav'>
				<NavItem
					navSize={navSize}
					icon={FiHome}
					title='Details'
					description='Input the description for the dashboard.'
					to={'/student'}
				/>
				<NavItem navSize={navSize} icon={FiCalendar} title='Time Table' to='/student/timetable' />
			</Flex>
		</Flex>
	);
}
