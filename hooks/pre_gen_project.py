import re
import sys

# use reference: https://www.tutorialspoint.com/python/python_reg_expressions.htm

MODULE_REGEX = r'^[a-zA-Z]{5,10} [A-Za-z]{0,10}$'

module_name = '{{ cookiecutter.library_name }}'

if not re.match(MODULE_REGEX, module_name):
    print('ERROR: %s is not a valid Python module name!' % module_name)

    # exits with status 1 to indicate failure
    sys.exit(1)