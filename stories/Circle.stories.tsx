import Circle from "./Circle";
import { Meta, StoryObj } from "@storybook/react";

// Circleコンポーネントに関するメタ情報を定義
// StorybookのUIに表示される情報を設定
const meta: Meta<typeof Circle> = {
  component: Circle, // Circleコンポーネントを使う
  title: "test/Circle", // タイトルをつける (/を入れると階層構造にできる)
  argTypes: {
    variant: {
      control: {
        type: "select", // selectboxで選択できるようにする設定
        options: ["orange", "green", "yellow"], // selectboxの選択肢
      },
    },
  },
  tags: ["autodocs"], // 作ったものを自動でドキュメント化する
};

export default meta;

// 型を定義
type Story = StoryObj<typeof meta>;

// Storiesの作成
/** オレンジ色の円です．*/ // StoriesのUIに説明文が表示される
export const BaseCircle: Story = { args: { variant: "orange" } };
/** 緑色の円です．*/
export const GreenCircle: Story = { args: { variant: "green" } };
/** 黄色の円です．*/
export const YellowCircle: Story = { args: { variant: "yellow" } };

// 上の三つをまとめて表示
export const GroupedCircle: Story = {
  render: () => (
    <div className="mb-2">
      <Circle variant="orange" />
      <Circle variant="green" />
      <Circle variant="yellow" />
    </div>
  ),
};
