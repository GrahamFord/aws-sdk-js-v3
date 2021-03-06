import { SMSClient } from "../../SMSClient";
import { GetConnectorsCommand } from "../../commands/GetConnectorsCommand";
import { DeleteReplicationJobCommand } from "../../commands/DeleteReplicationJobCommand";

async function smokeTestRunner() {
  const defaultRegion = process.env.AWS_SMOKE_TEST_REGION || "us-west-2";
  let testFailed = false;
  console.log("1..2");
  console.log("# Running tests for SMS.");

  await (async () => {
    const client = new SMSClient({
      region: defaultRegion
    });

    const command = new GetConnectorsCommand({} as any);

    try {
      const result = await client.send(command);
      console.log("ok SMS GetConnectors - no error expected from service");
    } catch (err) {
      console.log("not ok SMS GetConnectors - no error expected from service");
      // output unexpected error information
      console.log("# " + err.message);
      err.stack.split("\n").forEach((line: string) => {
        console.log("# " + line);
      });
      testFailed = true;
    }
  })();
  await (async () => {
    const client = new SMSClient({
      region: defaultRegion
    });

    const command = new DeleteReplicationJobCommand({
      replicationJobId: "invalidId"
    } as any);

    try {
      const result = await client.send(command);
      console.log(
        "not ok SMS DeleteReplicationJob - error expected from service"
      );
      testFailed = true;
    } catch (err) {
      console.log("ok SMS DeleteReplicationJob - error expected from service");
    }
  })();

  if (testFailed) {
    process.exit(1);
  } else {
    process.exit(0);
  }
}

// execute the test runner
smokeTestRunner();
