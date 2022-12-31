import { Flex, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Nav from '../Component/Nav/Nav';
import StudentNav from '../Component/StudentNav/Nav';
import StudentDetails from './StudentDetails';
import StudentTimeTable from './StudentTimeTable';
import {useLocation} from "react-router-dom";

const StudentHome = () => {
	const {state} = useLocation();

	return (
		<VStack spacing={0} flexDirection={'column'} w='full' h={'100vh'} overflow='hidden'>
			<Flex h={'full'} w={6 / 8}>
				<Flex as={'nav'} w='20%' h={'full'}>
					<StudentNav />
				</Flex>
				<Flex bg={'gray.10'} w='80%' p={'25px'} pb='20px' h='full'>
					<Routes>
						<Route path='/*' element={<StudentDetails Student={state}/>} />
						<Route path='/timetable' element={<StudentTimeTable />} />
					</Routes>
				</Flex>
			</Flex>
		</VStack>
	);
};

export default StudentHome;
