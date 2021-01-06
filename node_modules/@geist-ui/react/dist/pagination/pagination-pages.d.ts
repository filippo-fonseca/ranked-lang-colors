import React, { Dispatch, SetStateAction } from 'react';
interface Props {
    limit: number;
    count: number;
    current: number;
    setPage: Dispatch<SetStateAction<number>>;
}
declare const PaginationPages: React.FC<Props>;
export default PaginationPages;
