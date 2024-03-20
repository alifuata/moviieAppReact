import { Button, CircularProgress } from '@nextui-org/react';
import { useDispatch, useSelector } from 'react-redux';
import {
    decrement,
    decrementBy,
    fetchCount,
    increment,
    selectCount,
    selectIsLoading,
    sendCount,
} from './redux/features/counterSlice';
import Counter from './Counter';
import {
    useAddUserMutation,
    useGetUsersQuery,
    useLazyGetUsersQuery,
} from './redux/api/usersApi';
import { useState } from 'react';

function App() {
    const [users, setUsers] = useState([]);

    // const count = useSelector((state) => state.counter.value);
    const count = useSelector(selectCount);
    const isCountLoading = useSelector(selectIsLoading);
    const dispatch = useDispatch();

    // console.log('increment()', increment());

    // const { isLoading, data } = useGetUsersQuery();

    const [getUsers] = useLazyGetUsersQuery();

    const [addUser] = useAddUserMutation();

    const onClickAddUser = () => {
        addUser({
            firstName: 'Test',
            lastName: 'Test 2',
        }).then((res) => onClickGetUsers());
    };

    const onClickGetUsers = async () => {
        const { data } = await getUsers();

        setUsers(data);
    };

    return (
        <div className="App">
            <Counter />
            <div className="m-4 text-3xl">
                {isCountLoading ? <CircularProgress /> : count}
            </div>

            <Button
                variant={'shadow'}
                color={'secondary'}
                onClick={() => dispatch(increment())}
            >
                Arttır
            </Button>
            <Button
                variant={'shadow'}
                color={'secondary'}
                onClick={() => dispatch(decrement())}
            >
                Azalt
            </Button>
            <Button
                variant={'shadow'}
                color={'secondary'}
                onClick={() => dispatch(decrementBy(2))}
            >
                5 Azalt
            </Button>
            <Button onClick={() => dispatch(fetchCount())}>Fetch</Button>
            <Button onClick={() => dispatch(sendCount(count))}>Set</Button>

            <div>
                {users?.map((user) => {
                    return <li>{user.firstName}</li>;
                })}
            </div>

            <Button onClick={onClickGetUsers}>Kullanıcıları Çek</Button>
            <Button onClick={onClickAddUser}>Kullanıcı Ekle</Button>
        </div>
    );
}

export default App;
