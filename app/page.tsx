import { Button, Flex, Text } from '@radix-ui/themes';

export default function Home() {
  return (
    <>
   
    <Flex direction="column" gap="2">
			<Text>Hello from Radix Themes :)</Text>
			<Button>Let's go</Button>
{/* this is my addition totally unimpressed by radix
  */}
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Button>Hello World</Button>
    </div>
		</Flex>
    </>
  );
}