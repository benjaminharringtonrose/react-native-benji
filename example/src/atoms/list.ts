import { atom, useRecoilState } from "recoil";

import { IListForm } from "../screens/FormScreen";

export interface IListItem {
  firstName: string;
  lastName: string;
  amount: string;
  dateStart: Date;
  dateEnd: Date;
  address1: string;
  address2?: string;
  switch1: boolean;
}

type TListState = IListForm[];

const listState = atom<TListState>({
  key: "ListState",
  default: [],
});

export const useList = () => {
  const [list, setList] = useRecoilState(listState);
  const updateList = (item: IListForm) => {
    setList((prevList) => [...prevList, item]);
  };
  return {
    list,
    updateList,
  };
};
