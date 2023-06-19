/**
 * @description eg：表单策略
 */

let Validator = (function () {
  let checks = []; // 现有规则
  let rules = {
    notEmpty(val, msg) {
      if (val == "") return msg;
    },
    minLength(val, length, msg) {
      if (val == "" || val.length < length) {
        return msg;
      }
    },
    maxLength(val, length, msg) {
      if (val == "" || val.length > length) {
        return msg;
      }
    },
    isMobile(val, msg) {
      if (!/^1\d{10}/.test(val)) {
        return msg;
      }
    },
  };
  // 添加新规则
  function addRule(name, rule) {
    rules[name] = rule;
  }
  // 添加规则
  function add(element, rule) {
    checks.push(function () {
      let name = rule.shift();
      rule.unshift(element.value);
      return rules[name] && rules[name].apply(element, rule);
    });
  }
  // 开始校验
  function start() {
    for (let i = 0; i < checks.length; i++) {
      let check = checks[i];
      let msg = check();
      if (msg) {
        return msg;
      }
    }
  }

  // 单例
  return {
    add,
    addRule,
    start,
  };
})();
