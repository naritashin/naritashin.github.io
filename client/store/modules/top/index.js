const state = {
  openTasklist: [
    {
      id: '0001',
      title: 'open-task-title',
      description:
        'test-data-description,test-data-description,test-data-description,test-data-description,test-data-description,test-data-description,test-data-description,test-data-description,test-data-description,test-data-description,test-data-description,test-data-description,test-data-description',
      status: '1',
      estimatedTime: {
        hours: 72,
        minutes: 0
      },
      usageTime: {
        hours: 0,
        minutes: 0
      }
    },
    {
      id: '0002',
      title: 'open-task-title',
      description:
        'test-data-description,test-data-description,test-data-description,test-data-description,test-data-description,test-data-description,test-data-description,test-data-description,test-data-description,test-data-description,test-data-description,test-data-description,test-data-description',
      status: '1',
      estimatedTime: {
        hours: 72,
        minutes: 0
      },
      usageTime: {
        hours: 0,
        minutes: 0
      }
    },
    {
      id: '0003',
      title: 'open-task-title',
      description:
        'test-data-description,test-data-description,test-data-description,test-data-description,test-data-description,test-data-description,test-data-description,test-data-description,test-data-description,test-data-description,test-data-description,test-data-description,test-data-description',
      status: '1',
      estimatedTime: {
        hours: 72,
        minutes: 0
      },
      usageTime: {
        hours: 0,
        minutes: 0
      }
    },
    {
      id: '0004',
      title: 'open-task-title',
      description:
        'test-data-description,test-data-description,test-data-description,test-data-description,test-data-description,test-data-description,test-data-description,test-data-description,test-data-description,test-data-description,test-data-description,test-data-description,test-data-description',
      status: '1',
      estimatedTime: {
        hours: 72,
        minutes: 0
      },
      usageTime: {
        hours: 0,
        minutes: 0
      }
    }
  ],
  workingTasklist: [
    {
      id: '0005',
      title: 'working-task-title',
      description:
        'test-data-description,test-data-description,test-data-description,test-data-description,test-data-description,test-data-description,test-data-description,test-data-description,test-data-description,test-data-description,test-data-description,test-data-description,test-data-description',
      status: '2',
      estimatedTime: {
        hours: 72,
        minutes: 0
      },
      usageTime: {
        hours: 32,
        minutes: 15
      }
    },
    {
      id: '0006',
      title: 'working-task-title',
      description:
        'test-data-description,test-data-description,test-data-description,test-data-description,test-data-description,test-data-description,test-data-description,test-data-description,test-data-description,test-data-description,test-data-description,test-data-description,test-data-description',
      status: '2',
      estimatedTime: {
        hours: 72,
        minutes: 0
      },
      usageTime: {
        hours: 32,
        minutes: 15
      }
    },
    {
      id: '0007',
      title: 'working-task-title',
      description:
        'test-data-description,test-data-description,test-data-description,test-data-description,test-data-description,test-data-description,test-data-description,test-data-description,test-data-description,test-data-description,test-data-description,test-data-description,test-data-description',
      status: '2',
      estimatedTime: {
        hours: 72,
        minutes: 0
      },
      usageTime: {
        hours: 32,
        minutes: 15
      }
    },
    {
      id: '0008',
      title: 'working-task-title',
      description:
        'test-data-description,test-data-description,test-data-description,test-data-description,test-data-description,test-data-description,test-data-description,test-data-description,test-data-description,test-data-description,test-data-description,test-data-description,test-data-description',
      status: '2',
      estimatedTime: {
        hours: 72,
        minutes: 0
      },
      usageTime: {
        hours: 32,
        minutes: 15
      }
    }
  ],
  completedTasklist: [
    {
      id: '0009',
      title: 'completed-task-title',
      description:
        'test-data-description,test-data-description,test-data-description,test-data-description,test-data-description,test-data-description,test-data-description,test-data-description,test-data-description,test-data-description,test-data-description,test-data-description,test-data-description',
      status: '3',
      estimatedTime: {
        hours: 72,
        minutes: 0
      },
      usageTime: {
        hours: 70,
        minutes: 30
      }
    },
    {
      id: '0010',
      title: 'completed-task-title',
      description:
        'test-data-description,test-data-description,test-data-description,test-data-description,test-data-description,test-data-description,test-data-description,test-data-description,test-data-description,test-data-description,test-data-description,test-data-description,test-data-description',
      status: '3',
      estimatedTime: {
        hours: 72,
        minutes: 0
      },
      usageTime: '72:30'
    },
    {
      id: '0011',
      title: 'completed-task-title',
      description:
        'test-data-description,test-data-description,test-data-description,test-data-description,test-data-description,test-data-description,test-data-description,test-data-description,test-data-description,test-data-description,test-data-description,test-data-description,test-data-description',
      status: '3',
      estimatedTime: {
        hours: 72,
        minutes: 0
      },
      usageTime: '72:00'
    },
    {
      id: '0012',
      title: 'completed-task-title',
      description:
        'test-data-description,test-data-description,test-data-description,test-data-description,test-data-description,test-data-description,test-data-description,test-data-description,test-data-description,test-data-description,test-data-description,test-data-description,test-data-description',
      status: '3',
      estimatedTime: {
        hours: 72,
        minutes: 0
      },
      usageTime: {
        hours: 32,
        minutes: 15
      }
    }
  ],
  pendingTasklist: [
    {
      id: '0013',
      title: 'pending-task-title',
      description:
        'test-data-description,test-data-description,test-data-description,test-data-description,test-data-description,test-data-description,test-data-description,test-data-description,test-data-description,test-data-description,test-data-description,test-data-description,test-data-description',
      status: '9',
      estimatedTime: {
        hours: 72,
        minutes: 0
      },
      usageTime: {
        hours: 32,
        minutes: 15
      }
    },
    {
      id: '0014',
      title: 'pending-task-title',
      description:
        'test-data-description,test-data-description,test-data-description,test-data-description,test-data-description,test-data-description,test-data-description,test-data-description,test-data-description,test-data-description,test-data-description,test-data-description,test-data-description',
      status: '9',
      estimatedTime: {
        hours: 72,
        minutes: 0
      },
      usageTime: {
        hours: 32,
        minutes: 15
      }
    },
    {
      id: '0015',
      title: 'pending-task-title',
      description:
        'test-data-description,test-data-description,test-data-description,test-data-description,test-data-description,test-data-description,test-data-description,test-data-description,test-data-description,test-data-description,test-data-description,test-data-description,test-data-description',
      status: '9',
      estimatedTime: {
        hours: 72,
        minutes: 0
      },
      usageTime: {
        hours: 32,
        minutes: 15
      }
    },
    {
      id: '0016',
      title: 'pending-task-title',
      description:
        'test-data-description,test-data-description,test-data-description,test-data-description,test-data-description,test-data-description,test-data-description,test-data-description,test-data-description,test-data-description,test-data-description,test-data-description,test-data-description',
      status: '9',
      estimatedTime: {
        hours: 72,
        minutes: 0
      },
      usageTime: {
        hours: 32,
        minutes: 15
      }
    }
  ]
};

const mutations = {};

const actions = {};

const getters = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
