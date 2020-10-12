const { scan } = require("../helpers");

test(
  "kubeaudit should run and check our integration-tests namespace",
  async () => {
    await scan(
      "kubeaudit-test",
      "kubeaudit",
      ["-n", "integration-tests"],
      60
    );
    
    // If we got here the scan succeded
    expect(true).toBe(true);
  },
  5 * 60 * 1000
);
