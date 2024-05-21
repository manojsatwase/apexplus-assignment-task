export const getUniqueScenarioNames = (scenarios) => {
    const uniqueNames = scenarios?.reduce((acc, scenario) => {
      if (!acc.includes(scenario?.scenarioName)) {
        acc.push(scenario.scenarioName);
      }
      return acc;
    }, []);
    return uniqueNames;
  };