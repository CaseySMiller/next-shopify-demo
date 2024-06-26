export default function Contact(body: { body: string }) {
  const bodyArray = body.body.split('<strong>');

  const parseBody = (bodyArray: string[]) => {
    let bodyOutput: any = [];
    for (let index = 0; index < bodyArray.length; index++) {
      const element = bodyArray[index];

      if (element?.includes('</strong>')) {
        let itemObject: any = { title: '', lines: [] };

        const splitElement = element.split('</strong>');
        itemObject.title = splitElement[0]?.trim();

        // parse the 2nd half of the splitElement and add it to the itemObject then push to bodyOutput
        itemObject.lines = parseLines(splitElement[1]);
        bodyOutput.push(itemObject);
      }
    }
    return bodyOutput;
  };

  //function to parse the lines out of the html
  const parseLines = (lines: string | undefined) => {
    const regex = /(?![^<]*>)[\s\S]/g;
    const linesArray = lines?.match(regex);
    //clean up the rest of the unwanted characters and return an array of all non html lines
    const filteredLines = linesArray?.filter((line) => line !== '<');
    const cleanLines = filteredLines?.join('').split('\n');
    const linesOutput = cleanLines?.filter((line) => line !== '');

    return linesOutput;
  };

  const parsedBody = parseBody(bodyArray);

  return (
    <div className="mx-auto w-full p-3">
      {parsedBody.map((item: any, index: number) => {
        return (
          <div className="flex flex-row p-2 pb-6 text-lg" key={`contactKey${index}`}>
            <div className="mr-2 w-1/3 text-right text-slate-500">{item?.title}</div>
            <div className="border-l-2 border-slate-400 pl-2 text-slate-700">
              {item?.lines.map((line: string, index: number) => {
                return <p key={`lineKey${index}`}>{line}</p>;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
