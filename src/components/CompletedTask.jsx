export default function CompletedTask({ completedTaskList }) {
    return (
        <div className="mt-10">
            <h1 className="text-lg underline">Completed Tasks</h1>
            <ul>
            {completedTaskList.length != 0 ? (
                completedTaskList.map((task, index) => (
                    <li key={index} className="list-disc ml-5">{task}</li>
                )) 
            ) : (
                <p>None</p>
            )}
            </ul>
        </div>
    );
}