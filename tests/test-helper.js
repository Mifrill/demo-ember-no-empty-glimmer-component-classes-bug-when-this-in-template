import Application from 'demo-ember-no-empty-glimmer-component-classes-bug-when-this-in-template/app';
import config from 'demo-ember-no-empty-glimmer-component-classes-bug-when-this-in-template/config/environment';
import * as QUnit from 'qunit';
import { setApplication } from '@ember/test-helpers';
import { setup } from 'qunit-dom';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

setup(QUnit.assert);

start();
